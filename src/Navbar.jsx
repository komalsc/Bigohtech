import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { BsSun } from 'react-icons/bs';

const NavigationBar = () => {
  return (
    <Navbar bg="lightdark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Twolink</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto ">
          <Nav.Link href="#career-explorer">Career Explorer</Nav.Link>
          <Nav.Link href="#jobs">Jobs</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#profile">
            <i className="fa fa-user" />  {/* Replace with your icon */}
          </Nav.Link>
          <Button variant="outline-light"><BsSun/></Button>

          <Button variant="outline-light">Sign In</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
