import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='NavBar'>
        <div className="left">
            <div className="navbar-logo">
                
            </div>
        </div>
        <div className="right">
            <Link to="/Home">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
        </div>
    </div>
  )
}

export default NavBar