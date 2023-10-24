import React from 'react'
import './NavBar.css'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark navbar-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" id='ok'>Xerxes Ltd.</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="sad" to="/PP">ABOUT</Link>
              </li>
              <li className="nav-item">
                <Link className="sad" to="/SR">COntact</Link>
              </li>
              <li className="nav-item">
                <Link className="sad" to="/PP">Login</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar