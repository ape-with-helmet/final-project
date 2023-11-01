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
    <Navbar expand="md" className="bg-body-tertiary py-0" fixed='top' bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand><Link to={'/'} id='ok'>Xerxes Ltd.</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link><Link to={'/about'} className='Link'>About Us</Link></Nav.Link>
            <Nav.Link><Link to={'/CP'} className='Link'>Contact Us</Link></Nav.Link>
          </Nav>
          <Form className="d-flex mar toi">
            <Form.Control
              type="search"
              placeholder="Search for our products"
              className="me-5 float"
              aria-label="Search"
            />
            <Link to={'/'}><Button variant="outline-light" className='Link floater'>Search</Button></Link>
          </Form>
          <Link to={'/signup'} className='Link keys'><Button variant="outline-light">Sign Up</Button></Link>
          <Link to={'/login'} className='Link keys'><Button variant="light">Login</Button></Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;