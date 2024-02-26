import '../App.css';
import '../styleH.css';

import { Link, useMatch, useResolvedPath } from "react-router-dom"
import React, { useState } from 'react';


import logo from '../assets/reactblack.png'
import logoglow from '../assets/reactglow.png'
import Cart from '../assets/Cart.png'

import HomePage from "../pages/HomePage"
import AboutPage from "../pages/AboutPage"
import ContactPage from "../pages/ContactPage"
import LogInPage from '../pages/LogInPage'



export default function Header() {

    const [isHovered, setIsHovered] = useState(false);

    return (

        <nav className="nav">
            <Link to="/" className="site-title">

                <img
                    src={isHovered ? logoglow : logo}
                    alt="Logo"
                    onMouseOver={() => setIsHovered(true)}
                    onMouseOut={() => setIsHovered(false)}
                    className='App-logo'
                />
            </Link>
            <ul>
                
                <div class="dropdown">
                    <CustomLink to="/store">Store</CustomLink>
                    <div class="dropdown-content">
                        <CustomLink to="/cart">Cart</CustomLink>
                    </div>
                </div>
                
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/contact">Contact</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    const path = window.location.pathname

    return (
        <li className={path === to ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}
