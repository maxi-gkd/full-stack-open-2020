import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import Error from './components/Error'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setFilter] = useState('')
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    personService.getAll()
      .then(initial => {
        setPersons(initial)
      })
  }, [])

  const showNotification = (message) => {
    setMessage(message);
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  };

  const showError = (error) => {
    setError(error);
    setTimeout(() => {
      setError(null);
    }, 5000);
  };

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
        const personId = duplicated[0].id;
        personService
          .update(personId, newPerson)
          .then(updated => {
            setPersons(persons.map(p => p.id !== updated.id ? p : updated));
            setNewName('');
            setNewNumber('');
            showNotification(` Updated ${newName}`);
          })
          .catch(() => {
            showError(`Error: ${newName} has already been deleted from server`);
            setPersons(persons.filter((person) => person.id !== personId));
          });
      }
    } else {
      personService.create(newPerson).then(created => {
        setPersons(persons.concat(created))
        setNewName('');
        setNewNumber('');
        showNotification(` Added ${newName}`);
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
        showError(`Error: ${name} has already been deleted from server`);
        setPersons(persons.filter((person) => person.id !== id));
      });
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Error message={error} />
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