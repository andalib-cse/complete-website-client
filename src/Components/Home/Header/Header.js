import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

import persona from '../../../img/persona.png';

const Header = () => {

    return (
        <header className="homeHeader">
            <div className="logo">
                <img src={persona} alt="" />
            </div>

            <input type="checkbox" id="check_box" />
            <label className="check_box_label" htmlFor="check_box">
                <i className="fas fa-bars"></i>
            </label>

            <nav className="homeNavigation">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/'>About Us</Link></li>
                    <li><Link to='/'>Projects</Link></li>
                    <li><Link to='/'>Contact</Link></li>
                    <li><Link to='/admin/order_list'>Admin</Link></li>
                    <li><Link to='/client/service' className="active">Login</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;