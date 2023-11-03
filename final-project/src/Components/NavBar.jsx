import React, { useEffect, useState } from 'react'
import './NavBar.css'
//import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Table from './Searchtable';
import Nav from 'react-bootstrap/Nav';
//import axios from 'axios'

function NavScrollExample() {

  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const keys = ["name","sku"];

  const search = (data) => {
    return data.filter(
      (item) =>
        keys.some((key)=>item[key].toLowerCase().includes(query))
    );
  };

  console.log(query);
  const navigate = useNavigate()
  const auth = localStorage.getItem('loginData');

  useEffect(() => {
    fetch("http://localhost:8080/getall", {
      method: "GET"
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res.data)
      })
    console.log(data)
  }, [])

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
                <input className="form-control me-5 col-12 col-md-4 col-xl-4" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setQuery(e.target.value)} />
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
      <Table data={search(data)}/>
    </>
  );
}

export default NavScrollExample;