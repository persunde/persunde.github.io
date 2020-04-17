import React from 'react';
import './App.css';
import AnnonPerson from './annonperson.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithubSquare,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <figure className="image is-128x128" style={{display: 'inline-block'}}>
          <img alt="Per Sunde" className="is-rounded" src={AnnonPerson}/>
        </figure>
        </div>
        <div className="Socialmedia-div">
          <span className="Socialmedia-icon">
            <a className="link" target="_blank" rel="noopener noreferrer" href="https://github.com/persunde">
              <FontAwesomeIcon icon={faGithubSquare} color="black" size="2x"/>
            </a>
          </span>
          <span className="Socialmedia-icon">
            <a className="link" target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/per-sunde-578b68184">
              <FontAwesomeIcon icon={faLinkedin} color="black" size="2x"/>
            </a>
          </span>
        </div>
        <div style={{display: 'inline-block'}} className="buttons subtitle">
          <a href="https://www.sunde.dev/about" className="button is-rounded is-success">About</a>
          <a className="button is-rounded is-primary" target="_blank" rel="noopener noreferrer" href="https://www.sunde.dev/resume">Resume</a>
        </div>

        <p>
          Per Sunde developer
        </p>
      </header>
    </div>
  );
}

export default App;
