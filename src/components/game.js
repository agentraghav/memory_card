import React, { useState, useEffect } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import data from '../data/data';
import '../styles/styles.css';
export const Game = (props) => {
  const [clickedCards, setClickedCards] = useState([]);
  let arrCard = data;

  const shuffle = () => {
    for (let i = arrCard.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arrCard[i], arrCard[j]] = [arrCard[j], arrCard[i]];
    }
  };

  const logic = (e) => {
    if (!clickedCards.includes(e.target.id)) {
      setClickedCards((clickedCards) => [...clickedCards, e.target.id]);
      props.increseScore();
    } else {
      props.bestScore();
      props.resetScore();
    }
  };

  useEffect(() => {
    shuffle();
  }, [props.score, props.highScore]);

  return (
    <>
      <Row className='back'>
        <Col md={12}>
          {arrCard.map((card) => {
            <Col md={3} onClick={logic} key={card.id}>
              <Image className='img-char' src={card.imgsrc} />
              <p className='char-title'>{card.name}</p>
            </Col>;
          })}
        </Col>
      </Row>
    </>
  );
};
