import Head from 'next/head'
import Link from 'next/link'
import SomedIcons from '../components/somed-icons'

export default function Home() {
  return (
    <div className="App">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="App-header">
        <div>
        <figure className="image is-128x128" style={{display: 'inline-block'}}>
          <img alt="Per Sunde" className="is-rounded" src="/static/annonperson.png"/>
        </figure>
        </div>
        <SomedIcons
          color="black"
        />
        <div style={{display: 'inline-block'}} className="buttons subtitle">
          {/* <Link href="/about">
            <a className="button is-rounded is-success">About</a>
          </Link> */}
          <Link href="/blog">
            <a className="button is-rounded is-primary">Blog</a>
          </Link>
        </div>
        <p>
          Per Sunde fullstack developer
        </p>
      </header>
    </div>
  )
}