const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('Password required as argument')
}

const password = process.argv[2]

const clusterUrl = `mongodb+srv://fullstack:${password}@cluster0.mctxa.mongodb.net/<dbname>?retryWrites=true&w=majority`

mongoose.connect(clusterUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const personSchema = new mongoose.Schema({
    name: String,
    number: String
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length === 3) {
    Person.find({}).then((result) => {
        console.log('phonebook:')
        result.forEach((person) => {
            console.log(`${person.name} ${person.number}`)
        })
        mongoose.connection.close()
    })
}

if (process.argv.length === 5) {
    const person = new Person({
        name: process.argv[3],
        number: process.argv[4]
    })

    person.save().then(() => {
        console.log(
            `added ${process.argv[3]}: ${process.argv[4]} to phonebook.`
        )
        mongoose.connection.close()
    })
}

if (process.argv.length > 5) {
    console.log('Incorrect number of arguments.')
    process.exit(1);
}
