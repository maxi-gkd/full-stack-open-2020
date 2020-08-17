import React from 'react'

const Filter = ({ filterInput, handleFilterInputChange }) => (
    <div>
        Filter shown with:
        <input
            value={filterInput}
            onChange={handleFilterInputChange}
        />
    </div>
);

export default Filter;