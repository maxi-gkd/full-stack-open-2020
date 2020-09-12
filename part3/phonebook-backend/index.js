const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(express.json())

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

const generateId = () => {
    return Math.floor(Math.random() * Math.floor(10000));
}

app.get('/api/persons', (req, res) => {
    res.json(persons);
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id);
    const person = persons.find(p => p.id === id);

    if (!person) {
        return res.status(404).end()
    }

    res.json(person);
})

app.post('/api/persons', (req, res) => {
    const name = req.body.name;
    const number = req.body.number;

    if (!name || !number) {
        return res.status(400).json({ error: 'Name and number are required' })
    }

    if (persons.find(p => p.name === name)) {
        return res.status(400).json({ error: 'name must be unique' })
    }

    const person = {
        name,
        number,
        id: generateId()
    }

    persons = persons.concat(person);

    res.json(person);
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


const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})