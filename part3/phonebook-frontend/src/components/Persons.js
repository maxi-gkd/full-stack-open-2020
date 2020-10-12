import React from 'react';
import PropTypes from 'prop-types'
import Person from './Person'

const Persons = ({ persons, nameFilter, handleDeletePerson }) => {
    const filteredPersons = persons.filter((person) =>
        person.name.toLowerCase().includes(nameFilter.toLowerCase())
    );
    return (
        <div>
            {filteredPersons.map(person =>
                <Person
                    key={person.id}
                    person={person}
                    handleDeletePerson={handleDeletePerson} />
            )}
        </div>
    )
};

Persons.propTypes = {
    nameFilter: PropTypes.string.isRequired,
    persons: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleDeletePerson: PropTypes.func.isRequired
  }

export default Persons;