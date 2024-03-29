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
  <div className="flex space-x-4 w-1/12">
    <div className="w-full space-between">
      <a className="link" target="_blank" rel="noopener noreferrer" href="https://github.com/persunde">
        <FontAwesomeIcon icon={faGithubSquare} color={props.color} size="6x"/>
      </a>
    </div>
    <div className="w-full">
      <a className="link" target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/per-sunde-578b68184">
        <FontAwesomeIcon icon={faLinkedin} color={props.color} size="6x"/>
      </a>
    </div>
  </div>
  );
}

export default SomedIcons;