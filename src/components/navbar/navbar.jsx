import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'
import {Navbar,Nav } from 'react-bootstrap'


function Mynavbar() {
    return (
        <>
             <div className="App">
      <Navbar fixed="top" collapseOnSelect expand="md"   variant="dark" className="animate-navbar nav-theme justify-content-between">
  <Navbar.Brand href="#home">
      <h2>Shradha Parkhi</h2>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#skills">Skills</Nav.Link>
      <Nav.Link href="#experience">Experience</Nav.Link>
      <Nav.Link href="#projects">Projects</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
     
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
    </div>
        </>
    )
}

export default Mynavbar
