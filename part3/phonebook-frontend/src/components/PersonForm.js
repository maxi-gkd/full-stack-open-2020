import React from 'react';
import PropTypes from 'prop-types'

const PersonForm = ({ name, number, handleNameChange, handleNumberChange, handleAddPerson }) => (
    <form onSubmit={handleAddPerson}>
        <div>
            name:
          <input
                value={name}
                onChange={handleNameChange}
            />
        </div>
        <div>
            number:
          <input
                value={number}
                onChange={handleNumberChange}
            />
        </div>
        <div>
            <button type="submit">add</button>
        </div>
    </form>
);

PersonForm.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    handleNameChange: PropTypes.string.isRequired,
    handleNumberChange: PropTypes.func.isRequired,
    handleAddPerson: PropTypes.string.isRequired
  }

export default PersonForm;