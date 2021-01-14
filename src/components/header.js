import React from 'react';
import '../styles/styles.css';
import { Row, Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
export const Header = (props) => {
  const { score, highScore } = props;
  return (
    <>
      <Row className='nav-back'>
        <Col md={12}>
          <Image
            className='head-img'
            src='https://media.harrypotterfanzone.com/harry-potter-logo-tutorial-final.jpg'></Image>
        </Col>
        <Col md={12}>
          <h1 className='head-nav'>Memory Card</h1>
          <p className='score'>
            Score : {score}{' '}
            <span>
              <p>High Score : {highScore}</p>
            </span>
          </p>
        </Col>
      </Row>
    </>
  );
};
