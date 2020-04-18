import React from 'react';
import './App.css';
import AnnonPerson from './annonperson.png';

import SomedIcons from "./components/somed/SomedIcons"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <figure className="image is-128x128" style={{display: 'inline-block'}}>
          <img alt="Per Sunde" className="is-rounded" src={AnnonPerson}/>
        </figure>
        </div>
        <SomedIcons
          color="white"
        />
        <div style={{display: 'inline-block'}} className="buttons subtitle">
          <a href="https://www.sunde.dev/about" className="button is-rounded is-success">About</a>
          <a className="button is-rounded is-primary" target="_blank" rel="noopener noreferrer" href="https://www.sunde.dev/resume">Resume</a>
        </div>
        <p>
          Per Sunde fullstack developer
        </p>
      </header>
    </div>
  );
}

export default App;
