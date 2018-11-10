import React from 'react';
import Btn from '../../general/button/index';

const Profile = props => (
    <div className="profile">
    {
        props.btns.map( (link,index) => 
            <Btn 
                key={ index }
                classBtn = { link.classBtn }
                type = { link.type } 
                text = { link.text } 
                icon = { link.icon }
             />
        )
    }  
    </div>
);

export default Profile;