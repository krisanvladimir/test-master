import React from "react";
import {NavLink} from 'react-router-dom'

export const Navbar = () => {

    return (
        <nav>
            <div className="nav-wrapper teal darken-3 navbar">
                <a href="/" className="brand-logo">Rencredit</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/">Главная</NavLink></li>
                    <li><NavLink to="/order">Добавить покупку</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}