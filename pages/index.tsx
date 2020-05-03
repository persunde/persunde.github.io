import Head from 'next/head'
import Link from 'next/link'
import SomedIcons from '../components/somed-icons'

export default function Home() {
  return (
    <div className="App">
      <Head>
        <title>per.sunde.developer</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>

      <header className="App-header">
        <div>
        <figure className="h-32 w-32" style={{display: 'inline-block'}}>
          <img alt="Per Sunde" className="is-rounded" src="/assets/index/annonperson.png"/>
        </figure>
        </div>
        <SomedIcons
          color="black"
        />
        <div style={{display: 'inline-block'}} className="buttons subtitle pb-2">
          {/* <span className="pr-2">
            <Link href="/about">
              <a className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full padding">About</a>
            </Link>
          </span> */}
          <span className="pr-2">
            <Link href="/blog">
              <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Blog</a>
            </Link>
          </span>
        </div>
        <p>
          Per Sunde fullstack developer
        </p>
      </header>
    </div>
  )
}