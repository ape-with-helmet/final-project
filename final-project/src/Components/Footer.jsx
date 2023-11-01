import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div id="ft">
      <div className="container" >
        <footer className="py-5 my-5 ee">  
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a href='./' className="nav-link px-2 text-body-light tc">Home</a></li>
            <li className="nav-item"><a href='./CP' className="nav-link px-2 text-body-light tc">Contact</a></li>
            <li className="nav-item"><a href='./about' className="nav-link px-2 text-body-light tc">About</a></li>
          </ul>
          <p className="text-center text-body-light tc">© 2023 Xerxes Ltd.</p>
        </footer>
      </div>
    </div>
  )
}

export default Footer