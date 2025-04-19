import data from './data';
import './App.css';
import AnimalCard from '../AnimalCard/AnimalCard'
import React from 'react';

function showAdditional(additional){
  const alertInformation = Object.entries(additional)
    .map(information => `${information[0]}: ${information[1]}`)
    .join('\n');
    alert(alertInformation)
};


function App() {
  return <div className="wrapper">
    <h1>Animals</h1>
    {data.map(animal => (
      <div key={animal.name}>
        <AnimalCard 
          additional={animal.additional}
          diet={animal.diet}
          name={animal.name}
          scientificName={animal.scientificName}
          showAdditional={showAdditional}
          size={animal.size}
        />
        <button onClick={() => showAdditional(animal.additional)}>More Info</button>
      </div>
    ))}
  </div>;
}

export default App;
