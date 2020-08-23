import React from 'react';
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

export default Persons;