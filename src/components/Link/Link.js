import React from 'react';
import { NavLink } from 'react-router-dom';

const Link = ({ route }) => {

    return (
        <div >
            <NavLink to={route.path}>{route.name}</NavLink>

        </div >

    );
};

export default Link;