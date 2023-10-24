import React from 'react'
import './NavBar.css'
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';

function NavScrollExample() {
  return (
    <Navbar expand="md" className="bg-body-tertiary" fixed='top' bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand><Link to={'/'} id='ok'>Xerxes Ltd.</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 py-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link><Link to={'/PP'} className='Link'>Our Products</Link></Nav.Link>
            <Nav.Link><Link to={'/CP'} className='Link'>Contact Us</Link></Nav.Link>
          </Nav>
          <Form className="d-flex my-0"><Nav.Link>
            <Form.Control
              type="search"
              placeholder="Search for our products"
              className="me-2"
              aria-label="Search"
            /></Nav.Link>
            <Nav.Link><Link to={'/SR'} className='Link float'><Button variant="outline-light">Search</Button></Link></Nav.Link>
          </Form>
          <Nav.Link><Link to={'/signup'} className='Link floater'><Button variant="outline-light">Sign Up</Button></Link></Nav.Link>
          <Nav.Link><Link to={'/login'} className='Link floater'><Button variant="light">Login</Button></Link></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;