import React from 'react'

import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="container-fluid navbar-main-container">
                <div className="container">
                    <nav className='navbar navbar-expand-md navbar-dark'>
                        <h1 className='navbar-brand'>
                            Quiz-Hopper
                        </h1>
                        <ul className='navbar-nav ms-auto'>
                            <li className="nav-items">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-items">
                                <Link to="/contact" className="nav-link">Contact</Link>
                            </li>
                            <li className="nav-items">
                                <Link to="/studentLR" className="nav-link">StudentLR</Link>
                            </li>
                            <li className="nav-items">
                                <Link to="/instituteLR" className="nav-link">InstituteLR</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navbar