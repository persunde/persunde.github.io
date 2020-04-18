import Link from 'next/link'
import SomedIcons from "../src/components/somed/SomedIcons"
import AnnonPerson from "../src/img/annonperson.png"

export default function Index() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <figure className="image is-128x128" style={{display: 'inline-block'}}>
          <img alt="Per Sunde" className="is-rounded" src={AnnonPerson}/>
        </figure>
        </div>
        <SomedIcons
          color="black"
        />
        <div style={{display: 'inline-block'}} className="buttons subtitle">
          <Link href="/about">
            <a className="button is-rounded is-success">About</a>
          </Link>
          <Link href="/resume">
            <a className="button is-rounded is-primary" target="_blank" rel="noopener noreferrer" >Resume</a>
          </Link>
        </div>
        <p>
          Per Sunde fullstack developer
        </p>
      </header>
    </div>
  );
}
