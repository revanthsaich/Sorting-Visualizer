import React from 'react';
import './Card.css'
function CardItem({ name, desc }) {
  return (
    <div className="card">
      <div className="text">
      <h2>{name}</h2>
        <p>{desc}</p>
        <button className="btn">Sort</button>
      </div>
    </div>
  );
}

export default function Card({ data }) {
  const cardItems = data.map((item, index) => {
    return <CardItem key={index} name={item.name} desc={item.desc} />;
  });

  return (
    <div className="card-container">
      {cardItems}
    </div>
  );
}
