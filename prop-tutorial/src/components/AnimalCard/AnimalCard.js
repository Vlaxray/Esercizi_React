import React from 'react';
import './AnimalCard.css';

export default function AnimaldCard({
    additional,
    diet, 
    name,
    scientificName,
    showAdditional,
    size
}) {
    return(
        <div className="animal-wrapper"> 
    <h2>{name}</h2>
    <h3>{scientificName}</h3>
    <h4>{size} kg</h4>
    <div>{diet.join(', ')}.</div>  
    <button onClick={() => showAdditional(additional)}>More Info</button> 
    </div>
    );
    }