// src/components/RandomSpaceFact.js
import React, { useState, useEffect } from 'react';

const spaceFacts = [
  "Space is completely silent.",
  "The hottest planet is not the closest to the sun.",
  "One million Earths could fit inside the sun.",
  "A day on Venus is longer than a year on Venus.",
];

const RandomSpaceFact = () => {
  const [fact, setFact] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * spaceFacts.length);
    setFact(spaceFacts[randomIndex]);
  }, []);

  return (
    <div className="random-fact">
      <h3>Random Space Fact</h3>
      <p>{fact}</p>
    </div>
  );
};

export default RandomSpaceFact;
