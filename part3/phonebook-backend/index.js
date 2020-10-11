require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const Person = require('./models/person')

app.use(express.json())
app.use(cors())
app.use(express.static('build'))

const logFormat = (tokens, req, res) => {
  let format = [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'),
    '-',
    tokens['response-time'](req, res),
    'ms'
  ]

  if (req.method === 'POST') {
    format = format.concat(JSON.stringify(req.body))
  }

  return format.join(' ')
}

app.use(morgan(logFormat))


// Route Handlers

app.get('/api/persons', (req, res, next) => {
  Person.find({})
    .then((persons) => {
      res.json(persons)
    })
    .catch((error) => next(error))
})

app.get('/api/persons/:id', (req, res, next) => {
  const id = req.params.id

  Person.findById(id)
    .then((person) => {
      if (person) {
        res.json(person)
      } else {
        res.status(404).end()
      }
    })
    .catch((error) => next(error))

})

app.post('/api/persons', (req, res, next) => {
  const name = req.body.name
  const number = req.body.number

  if (!name || !number) {
    return res.status(400).json({ error: 'Name and number are required' })
  }

  const person = new Person({
    name,
    number
  })

  person
    .save()
    .then(savedPerson => savedPerson.toJSON())
    .then(savedAndFormattedPerson => res.json(savedAndFormattedPerson))
    .catch((error) => next(error))
})

app.put('/api/persons/:id', (req, res, next) => {
  const id = req.params.id
  const name = req.body.name
  const number = req.body.number

  if (!name || !number) {
    return res.status(400).json({ error: 'Name and number are required' })
  }

  const person = {
    name,
    number
  }

  return Person.findByIdAndUpdate(id, person, { new: true })
    .then(updatedPerson => {
      res.json(updatedPerson)
    })
    .catch((error) => next(error))
})

app.delete('/api/persons/:id', (req, res, next) => {
  const id = req.params.id
  Person.findByIdAndRemove(id)
    .then(() => {
      res.status(204).end()
    })
    .catch(error => next(error))
})

app.get('/info', (req, res, next) => {
  Person.countDocuments({}, (error, count) => {
    res.send(
      `<div>
        <div>Phonebook has info for ${count} people</div> 
        <div>${new Date()}</div>
    </div>`)
  })
    .catch((error) => next(error))
})


// Error Middlewares

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, req, res, next) => {
  console.log(error.message)

  if (error.name === 'CastError') {
    return res.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message })
  }

  next(error)
}

app.use(errorHandler)


const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})