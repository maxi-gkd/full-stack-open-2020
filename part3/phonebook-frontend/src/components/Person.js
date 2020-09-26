import React from 'react'

const Person = ({ person, handleDeletePerson }) => {
    return (
        <div>
            {person.name}
            {person.number}
            <button type="button" onClick={() => handleDeletePerson(person.id, person.name)}> Delete </button>
        </div>
    );
};

export default Person;