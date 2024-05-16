import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../Assests/logo.svg';
import '../Styles/Header.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={scrolled ? 'solid-bg' : 'transparent-bg'}
      style={{ paddingLeft: '170px', paddingRight: '170px', paddingTop: '30px',paddingBottom:"30px" }}
    >
      <LinkContainer to="/">
        <Navbar.Brand>
          <img src={logo} height="20" className="logo" alt="Logo" />
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
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
  );
}

export default Header;
