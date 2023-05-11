import React from 'react'
import { Link } from 'react-router-dom'

const Adminnav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
                <div className="container-fluid">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    
                                    <Link to="/adminpanel" className='nav-link'> Home</Link>
                                </li>
                               
                                <li className="nav-item">
                                <Link className="nav-link" to="/adddish">Add item</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" to="/viewitem">ViewItem</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" to="/">Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Adminnav
