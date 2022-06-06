import React, { useState } from 'react'
import {  FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {

  const [isOpen, setIsOpen]= useState(false)
  const clickHandler = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <nav>
        <ul className='nav_elements nav_btn'>
      <li> <Link to="/" ><button className='btn-secondary'>Refer A friend</button></Link>  </li>
      <li> <Link to="/need-job" > <button className='btn-secondary'>Need Job</button></Link>  </li>
      <li> <Link to="/login" ><button className='btn-secondary btn-last'>Login</button></Link>  </li>

    </ul>
       
 </nav>
    <nav className="navigation">
      <a href="/" className="brand-name">
        <h1>MIA</h1>
        <p>maidinaddis.com</p>
      </a>
      <button
        className="hamburger"
        onClick={ clickHandler}
      >
        <FaAlignRight/>
      </button>
      <div
        className={
          isOpen ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">How it works</Link>
          </li>
          <li>
            <Link to="/about">What we offer</Link>
          </li>
          <li>
            <Link to="/our-charges">Our charges</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
        
      </div>
  )
}

export default Navbar
