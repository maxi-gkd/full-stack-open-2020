import React from 'react'
import PropTypes from 'prop-types'

const Person = ({ person, handleDeletePerson }) => {
    return (
        <div>
            {person.name}
            {person.number}
            <button type="button" onClick={() => handleDeletePerson(person.id, person.name)}> Delete </button>
        </div>
    );
};

Person.propTypes = {
    person: PropTypes.objectOf(PropTypes.any).isRequired,
    handleDeletePerson: PropTypes.func.isRequired
  }

export default Person;