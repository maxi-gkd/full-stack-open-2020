import React from 'react';
import Person from './Person'

const Persons = ({ persons, nameFilter }) => {
    const filteredPersons = persons.filter((person) =>
        person.name.toLowerCase().includes(nameFilter.toLowerCase())
    );
    return (
        <div>
            {filteredPersons.map(person =>
                <Person
                    key={person.name}
                    person={person} />
            )}
        </div>
    )
};

export default Persons;