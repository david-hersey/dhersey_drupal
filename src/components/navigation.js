import { Link } from "gatsby"
import React from "react"
import Navbar from "react-bootstrap/Navbar"

const Navigation = () => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand to="#home">David Hersey Drupal</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Link to="#articleOne" className="nav-link">Article One</Link>
            <Link to="#articleTwo" className="nav-link">Article Two</Link>
            <Link to="#articleThree" className="nav-link">Article Three</Link>
            <Link to="#articleFour" className="nav-link">Article Four</Link>
        </Navbar.Collapse>
    </Navbar>
)


export default Navigation
