// react import
import React from "react";
import {Navbar, NavDropdown, Form, FormControl, Button} from "react-bootstrap";
import { Link } from "react-router-dom";

// nav function
// must still add svg files "xmlns" for vector art
function Nav() {
  return (
<>
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">ReciPique</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Add Recipes</Nav.Link>
      <Nav.Link href="#link">Search Recipes</Nav.Link>
      <Nav.Link href="#link">Logout</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Favorites</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Help</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
  </>
  );
}

// react export
export default Nav;
