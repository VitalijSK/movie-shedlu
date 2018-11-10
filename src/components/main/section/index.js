import React from 'react';

const Section = props => (
    <section className={ props.class } id = {props.id} >
        <div className="wrapper_title"><h2>{props.title}</h2></div>
        <div className="wrapper__movies">
            { props.children }
        </div>
    </section>
);

export default Section;