import './App.css';
import animals from './data';
import React from 'react';
import AnimalCard from '../AnimalCard/AnimalCard';

function App() {
  return (
  <div className="wrapper">
  {animals.map(animal=>
    <AnimalCard
    diet={animal.diet}
    key={animal.key}
    name={animal.name}
    size={animal.size}
    scientificName={animal.scientificName}
    />
  )}
  </div>
);
}

export default App;
