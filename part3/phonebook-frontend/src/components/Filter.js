import React from 'react'
import PropTypes from 'prop-types'

const Filter = ({ filterInput, handleFilterInputChange }) => (
    <div>
        Filter shown with:
        <input
            value={filterInput}
            onChange={handleFilterInputChange}
        />
    </div>
);

Filter.propTypes = {
    filterInput: PropTypes.string.isRequired,
    handleFilterInputChange: PropTypes.func.isRequired
  }

export default Filter;