import React from 'react';

const Article = props => (
    <article data-id={ props.id } className={ props.classArt }>
        <figure>
            { props.children }<img src={ props.urlImg } alt={ props.title } />
            <figcaption>{ props.title }</figcaption>
        </figure>
    </article>
);

export default Article;