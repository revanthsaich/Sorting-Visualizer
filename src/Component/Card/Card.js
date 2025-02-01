// Component/Card/Card.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';

function CardItem({ name, desc, algorithm }) {
  const navigate = useNavigate();

  // Navigate to SortingVisualizer page with the selected algorithm
  const handleCardClick = () => {
    navigate('/sorting', { state: { algorithm } });
  };

  return (
    <div className="card" onClick={handleCardClick}>
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
    return (
      <CardItem
        key={index}
        name={item.name}
        desc={item.desc}
        algorithm={item.algorithm} // Pass the algorithm type (e.g., "bubble", "merge", "quick")
      />
    );
  });

  return <div className="card-container">{cardItems}</div>;
}
