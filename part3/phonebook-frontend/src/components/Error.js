import React from 'react';
import PropTypes from 'prop-types'

const Error = ({ message }) => {
    const style = {
        color: 'red',
        background: 'lightgrey',
        fontSize: '20px',
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px'
    }

    if (message === null) {
        return null;
    }
    return (
        <div style={style}>
            {message}
        </div>
    );
}

Error.propTypes = {
    message: PropTypes.string.isRequired,
}

export default Error;