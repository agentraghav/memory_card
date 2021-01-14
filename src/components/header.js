import React from 'react';
import '../styles/styles.css';
import { Row } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
export const Header = () => {
  return (
    <>
      <Row className='nav-back'>
        <Image
          className='head-img'
          src='https://media.harrypotterfanzone.com/harry-potter-logo-tutorial-final.jpg'></Image>
        <div className='head-nav'>
          <h1>Memory Card</h1>
        </div>
      </Row>
    </>
  );
};
