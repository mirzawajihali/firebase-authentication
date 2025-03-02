import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex gap-4'>
            <NavLink className='text-white font-bold' to="/">Home</NavLink>
            <NavLink className='text-white font-bold' to="/login">Login</NavLink>
        </div>
    );
};

export default Header;