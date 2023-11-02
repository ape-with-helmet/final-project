import React from 'react'
import './NavBar.css'
//import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Search from './Search';

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
      <Navbar expand="md" className="bg-body-tertiary py-0" fixed='top' bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand><Link to={'/'} id='ok'>Xerxes Ltd.</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            {auth ?
              <>
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  
                  <Nav.Link><Link to={'/CP'} className='Link'>Contact Us</Link></Nav.Link>
                </Nav>
                <Button variant="light" onClick={submit} className='Link keys'>Logout</Button>
              </>
              :
              <>
                <Nav.Link><Link to={'/about'} className='Link'>About Us</Link></Nav.Link>
                <Search />
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