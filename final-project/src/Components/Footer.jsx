import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div id="ft">
      <div class="container" >
        <footer class="py-3 my-4">  
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item"><a href='./' class="nav-link px-2 text-body-light tc">Home</a></li>
            <li class="nav-item"><a href='./CP' class="nav-link px-2 text-body-light tc">Contact</a></li>
            <li class="nav-item"><a href='./about' class="nav-link px-2 text-body-light tc">About</a></li>
          </ul>
          <p class="text-center text-body-light tc">© 2023 Xerxes Ltd.</p>
        </footer>
      </div>
    </div>
  )
}

export default Footer