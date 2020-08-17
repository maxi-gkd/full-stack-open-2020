import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setFilter] = useState('')

  const handleFilterInputChange = (event) => {
    setFilter(event.target.value);
  }

  const handleAddPerson = (event) => {
    event.preventDefault()

    const anyDuplicated = persons.filter(
      (person) => person.name === newName
    ).length;

    if (anyDuplicated > 0) {
      window.confirm(
        `${newName} is already added to phonebook`
      )
    } else {
      const newPerson = {
        name: newName,
        number: newNumber
      }

      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        filterInput={nameFilter}
        handleFilterInputChange={handleFilterInputChange}
      />
      <h2>Add a new</h2>
      <PersonForm
        name={newName}
        number={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleAddPerson={handleAddPerson}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        nameFilter={nameFilter} />
    </div>
  )
}

export default App