import React, { useEffect, useState } from 'react'
import './NavBar.css'
import { Link, useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

function NavScrollExample() {
  const navigate = useNavigate()
  const auth = localStorage.getItem('loginData');
  let submit = async (e) => {
    e.preventDefault()
    navigate('/login');
    localStorage.clear();
  }
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary py-0" fixed='top' bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand><Link to={'/'} id='ok'>Xerxes Ltd.</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav.Link><Link to={'/about'} className='Link'>About Us</Link></Nav.Link>
            <Nav.Link><Link to={'/CP'} className='Link'>Contact Us</Link></Nav.Link>
            {auth ?
              <>
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                </Nav>
                <Button variant="light" onClick={submit} className='Link keys'>Logout</Button>
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