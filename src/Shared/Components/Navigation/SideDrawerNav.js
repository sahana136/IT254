import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const SideDrawerNav = props => {
    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/" exact>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/u1/upload" exact>
                    Upload
                </NavLink>
            </li>
            <li>
                <NavLink to="/branches" exact>
                    Branches
                </NavLink>
            </li>
            <li>
                <NavLink to="/about" exact>
                    About
                </NavLink>
            </li>
            <li>
                <NavLink to="/auth" exact>
                    Login
                </NavLink>
            </li>
            <li>
                <NavLink to="/auth" exact>
                    Sign Up
                </NavLink>
            </li>
        </ul>
    );
};

export default SideDrawerNav;
