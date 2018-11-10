import React from 'react';
import Navigation from './nav/index';
import Profile from './profile/index';

const Header = props => (
    <header>
        <div className="wrapper_menu">
            <Navigation  menu = {[
                    {href : '#process', text : 'Идут'},
                    {href : '#soon', text : 'Скоро'},
                    {href : '#map', text : 'Карта'}
                ]}
            />
            <Profile btns = {[
                {   classBtn : 'enter',
                    type : 'button',
                    text : 'Вход',
                    icon : 'fa-user'
                },
                {   classBtn : 'registration',
                    type : 'button',
                    text : 'Регистрация',
                    icon : 'fa-user-plus'
                },
            ]} />
        </div>
    </header>
);

export default Header;