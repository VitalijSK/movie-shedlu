import React from 'react';
import ListItem from './li/index.js';

const ListsMenu = props => (
    <ul className="mobile-menu__list">
        {
            props.menu.map((item, index) => 
                <ListItem 
                    key={index}
                    href = { item.href }
                    text = { item.text }
                />
            )
        }
    </ul>
);

export default ListsMenu;