import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../Assests/logo.svg";
import "../Styles/Header.css"; // Import your CSS file here

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
        setSticky(true);
      } else {
        setScrolled(false);
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`navbar-custom ${scrolled ? "solid-bg" : "transparent-bg"} ${sticky ? "sticky" : ""}`}
    >
      <a href="#home" className="navbar-brand">
        <img src={logo} height="20" className="logo" alt="Logo" />
      </a>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="ml-auto">
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#work" className="nav-link">
            Work
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
