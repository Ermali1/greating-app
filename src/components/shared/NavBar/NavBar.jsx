// import React from 'react'
// import { Link } from 'react-router-dom'
// import imageLogo from '../../../assets/logo.png'

// function NavBar() {
//   return (
//     <div className='NavBar'>
//         <div className="left">
//             <div className="navbar-logo">
//                 <img src={imageLogo} alt="logo" />
//             </div>
//         </div>
//         <div className="right">
//             <Link to="/Home">Home</Link>
//             <Link to="/About">About</Link>
//             <Link to="/Contact">Contact</Link>
//         </div>
//     </div>
//   )
// }

// export default NavBar

import React from 'react';
import { Link } from 'react-router-dom';
import imageLogo from '../../../assets/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.scss';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={imageLogo} alt="logo" height="30" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/Home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
