import React, { useState, useEffect } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import data from '../data/data';
export const Game = (props) => {
  const [clickedCards, setClickedCards] = useState([]);
  let arrCard = data;

  const shuffle = () => {
    for (let i = arrCard.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arrCard[i], arrCard[j]] = [arrCard[j], arrCard[i]];
    }
  };

  useEffect(() => {
    shuffle();
  }, [score, highScore]);

  return (
    <>
      <Row className='back'></Row>
    </>
  );
};
