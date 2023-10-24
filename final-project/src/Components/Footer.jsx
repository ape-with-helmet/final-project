import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <div id="ft">
      <div class="container" >
        <footer class="py-3 my-4">  
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item"><Link to="#" class="nav-link px-2 text-body-light tc">Home</Link></li>
            <li class="nav-item"><Link to="#" class="nav-link px-2 text-body-light tc">Features</Link></li>
            <li class="nav-item"><Link to="#" class="nav-link px-2 text-body-light tc">Pricing</Link></li>
            <li class="nav-item"><Link to="#" class="nav-link px-2 text-body-light tc">FAQs</Link></li>
            <li class="nav-item"><Link to="#" class="nav-link px-2 text-body-light tc">About</Link></li>
          </ul>
          <p class="text-center text-body-light tc">© 2023 Zerxes Ltd.</p>
        </footer>
      </div>
    </div>
  )
}

export default Footer