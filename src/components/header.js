import React from 'react';
import '../styles/styles.css';
import { Nav, Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Form, FormControl, Button } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
export const Header = () => {
  return (
    <>
      <Navbar className='nav-back'>
        <Container>
          <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
          <Nav className='mr-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#features'>Features</Nav.Link>
            <Nav.Link href='#pricing'>Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
