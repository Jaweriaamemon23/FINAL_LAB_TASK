import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import logo from '../Assets/logo3-308b1b4999411a4297e11dc8f97f4b88 1.png'; // Replace with the actual path to your logo
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container>
        {/* Use an <img> element for the logo */}
        <Navbar.Brand>
          <Link to={'/'}>
            <img 
              src={logo}
              alt="Your Logo"
              width="55"
              height="30"
              className="d-inline-block align-top"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-5 text-white" > {/* Align items to the right with margin */}
            <Nav.Link className="me-3 text-white">Web3Maker</Nav.Link>
            <Nav.Link className="me-3 text-white">White Paper</Nav.Link>
            <Nav.Link className="me-3 text-white">Services</Nav.Link>
            <Nav.Link className="me-3 text-white">Tool</Nav.Link>
            <Nav.Link className="me-3 text-white">Contact us</Nav.Link>

          </Nav>
          <Nav className="me-3"> {/* Add margin to the right side of the Nav containing the button */}
            <Button variant="outline-primary">Start for free</Button>
          </Nav>
          <br></br>
          <br></br>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
