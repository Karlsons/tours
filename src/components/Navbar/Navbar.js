import React from 'react'
import './Navbar.scss'
import logo from '../../../src/logo.png'

export default function navbar() {
    return <nav className="navbar">
        <img src={logo} alt='City tours'></img>
        <ul className='nav-links'>
            <li>
                <a href='/' className='nav-link'>
                    home
                </a>
            </li>
            <li>
                <a href='/' className='nav-link'>
                    about
                </a>
            </li>
            <li>
                <a href='/' className='nav-link active'>
                    tours
                </a>
            </li>
        </ul>

    </nav>
}
