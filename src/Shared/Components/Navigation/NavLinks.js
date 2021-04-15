import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../Context/auth-context';
import './NavLinks.css';

const NavLinks = props => {
    const auth = useContext(AuthContext);

    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/" exact>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/upload" exact>
                    Upload
                </NavLink>
            </li>
            <li>
                <NavLink to="/about" exact>
                    About
                </NavLink>
            </li>
            {!auth.isLoggedIn && (
                <li>
                    <NavLink to="/auth" exact>
                        Login/Sign Up
                    </NavLink>
                </li>
            )}
            {auth.isLoggedIn && (
                <li>
                    <NavLink to="/home">
                        Logout
                    </NavLink>
                </li>
            )}
        </ul>
    );
};

export default NavLinks;
