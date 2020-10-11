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

app.use(morgan(logFormat));


let persons = [
    {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": 1
    },
    {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
    },
    {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
    },
    {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4
    }
];


app.get('/api/persons', (req, res) => {
    Person.find({})
        .then((people) => {
            res.json(people);
        })
        .catch((error) => next(error))
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id);
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

app.post('/api/persons', (req, res) => {
    const name = req.body.name;
    const number = req.body.number;

    if (!name || !number) {
        return res.status(400).json({ error: 'Name and number are required' })
    }

    const person = new Person({
        name,
        number
    })

    person
        .save()
        .then((savedPerson) => {
            res.json(savedPerson.toJSON())
        })
        .catch((error) => next(error))

})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id);
    persons = persons.filter(p => p.id !== id);

    res.status(204).end();
})

app.get('/info', (req, res) => {
    res.send(
        `<div>
        <div>Phonebook has info for ${persons.length} people</div> 
        <div>${new Date()}</div>
    </div>`);
})


const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})