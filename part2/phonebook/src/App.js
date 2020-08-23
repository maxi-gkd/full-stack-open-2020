import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setFilter] = useState('')

  useEffect(() => {
    personService.getAll()
      .then(initial => {
        setPersons(initial)
      })
  }, [])

  const handleFilterInputChange = (event) => {
    setFilter(event.target.value);
  }

  const handleAddPerson = (event) => {
    event.preventDefault();

    const newPerson = {
      name: newName,
      number: newNumber
    }

    const duplicated = persons.filter(
      (person) => person.name === newName
    );

    if (duplicated.length > 0) {
      if (window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      )) {

        personService
          .update(duplicated[0].id, newPerson)
          .then(updated => {
            setPersons(persons.map(p => p.id !== updated.id ? p : updated));
            setNewName('');
            setNewNumber('');
          });
      }
    } else {
      personService.create(newPerson).then(created => {
        setPersons(persons.concat(created))
        setNewName('')
        setNewNumber('')
      });
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleDeletePerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personService.remove(id).then(() => {
        setPersons(persons.filter(p => p.id !== id))
      }).catch(() => {
        alert(`Error: ${name} already deleted`);
        setPersons(persons.filter((person) => person.id !== id));
      });
    }
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
        nameFilter={nameFilter}
        handleDeletePerson={handleDeletePerson} />
    </div>
  )
}

export default App