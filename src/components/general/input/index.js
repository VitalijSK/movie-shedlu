import React from 'react';

const Input = props => (
    <input 
        type = { props.type }
        id = { props.id }
        className = { props.class }
        value = { props.value }
    />
);

export default Input;