import React from 'react';
import PropTypes from 'prop-types'

const Notification = ({ message }) => {
    const style = {
        color: 'green',
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
    )

};

Notification.propTypes = {
    message: PropTypes.objectOf(PropTypes.string).isRequired
  }

export default Notification;