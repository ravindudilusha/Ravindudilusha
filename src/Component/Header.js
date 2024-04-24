import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../Assests/logo.svg';
import "../Styles/Header.css";

function Header() {
  return (
    <div className='container' style={{marginTop:"-40%"}}>
      <Navbar expand="lg" className='p-3'>
      <LinkContainer to="/">
        <Navbar.Brand >
          <img
            src={logo}
            height="20"
            className="logo"
            alt="Logo"
          />
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='navlink justify-content-end'>
        <Nav className="ml-auto">
          <LinkContainer to="/">
            <Nav.Link className="text-white">Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link className="text-white">About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/work">
            <Nav.Link className="text-white">Work</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link className="text-white">Contact</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}

export default Header;
