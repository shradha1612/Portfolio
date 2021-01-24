import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
function Mynavbar() {
  return (
    <>
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="md"
        variant="dark"
        className="animate-navbar nav-theme justify-content-between "
      >
        <Navbar.Brand href="#home">
          <h2>Shradha Parkhi</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link
              activeClass="active"
              to="main"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Nav.Link><h5>Home</h5></Nav.Link>
            </Link>

            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Nav.Link><h5>About</h5></Nav.Link>
            </Link>

            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Nav.Link to="/skills"><h5>Skills</h5></Nav.Link>
            </Link>
            <Link
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Nav.Link><h5>Experience</h5></Nav.Link>
            </Link>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Nav.Link><h5>Projects</h5></Nav.Link>
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Nav.Link><h5>Contact</h5></Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
export default Mynavbar;
