import { Link } from "gatsby"
import React from "react"
import Navbar from "react-bootstrap/Navbar"

const Navigation = () => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand><Link to="/">David Hersey Drupal</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
        </Navbar.Collapse>
    </Navbar>
)


export default Navigation
