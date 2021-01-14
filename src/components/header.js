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
          <Image
            className='head-img'
            src='https://media.harrypotterfanzone.com/harry-potter-logo-tutorial-final.jpg'></Image>
          <div className='head-nav'>
            <h1>Memory Card</h1>
          </div>
        </Container>
      </Navbar>
    </>
  );
};
