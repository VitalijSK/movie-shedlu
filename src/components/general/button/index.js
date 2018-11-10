import React from 'react';

const Btn = props => (
    <button className={props.classBtn} type={props.type || "button"} >{ props.text } 
     {
        props.icon && <i className={`fa ${props.icon}`} aria-hidden="true"></i>
     }
    </button>
);

export default Btn;