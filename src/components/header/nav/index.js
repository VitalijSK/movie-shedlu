import React from 'react';
import ListMenu from './ul/index.js';
import Btn from '../../general/button/index';
import Input from '../../general/input/index';

const NavMenu = props => (
    <nav className="mobile-menu">
        <a href="/" className="mobile-menu__logo">КИНОПОДБОР</a>
        <Btn classBtn="mobile-menu__city" type="button" text="Гомель" />
        <Input type="checkbox" id="checkbox" class="mobile-menu__checkbox" />
        <label htmlFor="checkbox" className="mobile-menu__btn">
            <div className="mobile-menu__icon"></div>
        </label>
        <div className="mobile-menu__cont">
            <ListMenu 
                menu = {props.menu}
            />
        </div>
    </nav>
);

export default NavMenu;