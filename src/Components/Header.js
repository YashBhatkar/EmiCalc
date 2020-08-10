import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import Symbol from './Symbol';

export class Header extends Component {
    render() {
        return (
            <div>
              <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home" style={{ fontSize:25}}> 
    <Symbol/> {' '}
      EMI Calculator
    </Navbar.Brand>
    <Nav> 
        <Nav.Link href="#features" >Features</Nav.Link>
        <Nav.Link href="#pricing" >Pricing</Nav.Link>
        <Nav.Link href="#descriptions" >Description</Nav.Link>
        </Nav>
        <Nav class="collapse navbar-collapse justify-content-end">
        <Nav.Link href="#about" >About</Nav.Link>
        <Nav.Link href="#contact_us" >Contacts Us</Nav.Link>
        </Nav>
  </Navbar>

            </div>
        )
    }
}

export default Header

