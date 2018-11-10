import React from 'react';

const ListItem = props => (
    <li className="mobile-menu__item">
        <a href="{ props.href }" className="mobile-menu__link">{props.text}</a>
    </li>
);

export default ListItem;