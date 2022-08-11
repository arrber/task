import React from 'react';
import { NavLink } from "react-router-dom";

import "./Navbar.scss";

const Navbar = () => {
    return (
    <div className="navbar">
        <div className="desktop">
            <ul className="nav-desktop">
                <li><NavLink to="/" className="nav--link">Code</NavLink></li>
                <li><NavLink to="/Giphy" className="nav--link">Giphy</NavLink></li>
                <li><NavLink to="/Task" className="nav--link">Task</NavLink></li>
            </ul>
        </div>
    </div>
    );
};

export default Navbar;