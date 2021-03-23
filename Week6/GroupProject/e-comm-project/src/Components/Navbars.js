import React, { Component } from 'react';
// import Board from './Board'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Navbar, NavDropdown, Nav, Form, FormControl, Button } from 'react-bootstrap';
class Navbars extends Component {
    render() {
        return (
            <div>
<Navbar bg="dark" variant="dark" expand="lg">
<Navbar.Brand href="/">
      <img alt="nice kicks company logo" src="https://i.ibb.co/qDKqsjG/Logo3.jpg" width="250" height="100"/>
      </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/board">Store</Nav.Link>
      <Nav.Link href="/about">About Us</Nav.Link>
      <NavDropdown title="Products" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Shoes</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Hats</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Jerseys</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success" onClick={() => {alert('Search Disabled');}}>Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
            </div>
        )
    }
}
export default Navbars