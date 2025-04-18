import './App.css';
import React from 'react';

const displayEmojiName = event => alert(event.target.id);
const emojis = [
  {
   emoji: "😀",
   name: "grinning face"
  },
  {
   emoji: "🎉",
   name: "party popper"
  },
  {
   emoji: "💃",
   name: "woman dancing"
  }
  ];

function App() {
  const greeting ="greeting";
  const displayAction = false; /*se metti ture appare il condizionale "se io fossi"*/

  return(
  <div className="container">
    <h1 id={greeting}>Hellooooooooooooooo</h1>
    {displayAction && <p>I am writing JSX</p>}
    
    <ul>{
 emojis.map(emoji => (
 <li key={emoji.name}>
 <button onClick={displayEmojiName}>
 <span role="img" aria-label={emoji.name} id={emoji.name}>
  {emoji.emoji}
 </span>
 </button>
 </li>
 ))
 }

    </ul>
  </div>
)
}

export default App;
