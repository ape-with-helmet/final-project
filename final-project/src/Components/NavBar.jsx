import React, { useEffect, useState } from 'react'
import './NavBar.css'
import { Link, useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Search from './Search';

function NavScrollExample() {
  const navigate = useNavigate()
  const [cartData, setcartData] = useState([]);
  const auth = localStorage.getItem('loginData');

  let submit = async (e) => {
    e.preventDefault()
    navigate('/login');
    localStorage.clear();
  }
  let carty = async (e) => {
    e.preventDefault()
    navigate('/cart');
  }
  
  useEffect(() => {
    fetch("http://localhost:8080/getallcart", {
      method: "GET"
    })
      .then((res) => res.json())
      .then((res) => {
        setcartData(res.data)
      })
    console.log(cartData)
    //const cartLength = cartData.length;
    console.log(cartData.length)
    // for (let index = 0; index < cartLength; index++) {
    //   const cartValue = 
    // }
  },[])
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary py-0" fixed='top' bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand><Link to={'/'} id='ok'>Xerxes Ltd.</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav.Link><Link to={'/about'} className='Link kink'><Button variant="dark-outline" className='kink'>About Us</Button></Link></Nav.Link>
            <Nav.Link><Link to={'/CP'} className='Link kink'><Button variant="dark-outline" className='kink'>Contact Us</Button></Link></Nav.Link>
            {auth ?
              <>
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                </Nav>
                <button onClick={submit} className='listy'>Logout</button>
                <Button variant="dark-outline" className='Link keys' onClick={carty}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg></Button>
              </>
              :
              <>
                <Link to={'/signup'} className='Link keys ms-auto'><Button variant="outline-light">Sign Up</Button></Link>
                <Link to={'/login'} className='Link keys'><Button variant="light">Login</Button></Link>
              </>
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavScrollExample;