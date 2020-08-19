import React from 'react'

const Filter = ({ filter, handleFilterChange }) => (
    <div>
        <label>
            Find countries: <input value={filter} onChange={handleFilterChange} />
        </label>
    </div>
)


export default Filter;