import React from 'react';
import './CardContainer.css'; // Optional: for card styles

function CardContainer({ cards }) {
  return (
    <div className="CardContainer-row">
      {cards.map((card, index) => (
        <div className="CardContainer" key={index}>
          <img src={card.image} alt={card.title} />
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
}
export default CardContainer;
