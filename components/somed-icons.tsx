import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

const SomedIcons: React.FunctionComponent = () => {
  return (
  <div className="flex space-x-4 justify-center">
    <div>
      <a className="link" target="_blank" rel="noopener noreferrer" href="https://github.com/persunde">
        <FontAwesomeIcon icon={faGithubSquare} color="#24292e" size="2x"/>
      </a>
    </div>
    <div>
      <a className="link" target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/per-sunde">
        <FontAwesomeIcon icon={faLinkedin} color="#0A66C2" size="2x"/>
      </a>
    </div>
  </div>
  );
}

export default SomedIcons;
