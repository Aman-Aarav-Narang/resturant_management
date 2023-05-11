import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

import "../App.css"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { GiHamburger, GiHamburgerMenu } from 'react-icons/gi'

const Header = () => {

    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <>

            <div className="">
                <div className="outer-nav">
                    <div className="logo-section">
                        <img src="logo512.png" alt="" />
                        <span>तहलका</span>
                    </div>

                    <div className={showMediaIcons ? "link-section mobile-menu-link" : "link-section"
                    }>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/usermenu">Dishes</Link></li>
                            <li><Link to="/loginpanel">Login</Link></li>
                        </ul>
                    </div>

                    <div className="social-media-section">
                       
                        <ul className="social-media-desktop">
                            <li><a href="https://www.facebook.com/" target='_blank'><FaFacebook className='facebook' /></a></li>
                            <li><a href="https://www.instagram.com/" target='_blank'><FaInstagram /></a></li>
                        </ul>
                    </div>
                    <div className="hamburger-menu d-flex flex-column align-items-end justify-content-center">
                        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                            <GiHamburgerMenu className='hamburger-menu1' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header