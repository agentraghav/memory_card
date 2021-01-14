import React, { useState, useEffect } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import data from '../data/data';
import '../styles/styles.css';
export const Game = (props) => {
  const [clickedCards, setClickedCards] = useState([]);
  let arrCard = data;
  console.log(arrCard);
  const shuffle = () => {
    for (let i = arrCard.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arrCard[i], arrCard[j]] = [arrCard[j], arrCard[i]];
    }
  };

  const logic = (e) => {
    if (!clickedCards.includes(Number(e.target.closest('.card-click').id))) {
      setClickedCards((clickedCards) => [
        ...clickedCards,
        Number(e.target.closest('.card-click').id),
      ]);
      props.increaseScore();
    } else {
      props.bestScore(props.score);
      props.resetScore();
      setClickedCards([]);
    }
  };

  useEffect(() => {
    shuffle();
  }, [props.score, props.highScore]);

  return (
    <>
      <Row className='back'>
        <Col className='cont' md={12}>
          {arrCard.map((card) => {
            return (
              <Col
                className='card-click'
                lg={3}
                onClick={(e) => logic(e)}
                key={card.id}
                id={card.id}>
                <Image className='img-char' src={card.imgsrc} />
                <p className='char-title'>{card.name}</p>
              </Col>
            );
          })}
        </Col>
      </Row>
    </>
  );
};
