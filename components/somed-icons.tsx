import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

interface SomedIconsProps {
  color: string;
}

const SomedIcons: React.FunctionComponent<SomedIconsProps> = (
  props
) => {
  return (        
  <div className="Socialmedia-div">
    <span className="Socialmedia-icon">
      <a className="link" target="_blank" rel="noopener noreferrer" href="https://github.com/persunde">
        <FontAwesomeIcon icon={faGithubSquare} color={props.color} size="2x"/>
      </a>
    </span>
    <span className="Socialmedia-icon">
      <a className="link" target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/per-sunde-578b68184">
        <FontAwesomeIcon icon={faLinkedin} color={props.color} size="2x"/>
      </a>
    </span>
  </div>
  );
}

export default SomedIcons;