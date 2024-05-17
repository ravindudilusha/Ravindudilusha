import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
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
      style={{ paddingLeft: '10%', paddingRight: '10%', paddingTop: '20px', paddingBottom: '20px' }}
    >
      <a href="#home" className="navbar-brand">
        <img src={logo} height="20" className="logo" alt="Logo" />
      </a>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="ml-auto">
          <a href="#home" className="nav-link text-white">Home</a>
          <a href="#about" className="nav-link text-white">About</a>
          <a href="#work" className="nav-link text-white">Work</a>
          <a href="#contact" className="nav-link text-white">Contact</a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
