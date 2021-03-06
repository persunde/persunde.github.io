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
          <img alt="Per Sunde" className="rounded-full" src="/assets/index/geneve-anime.jpeg"/>
        </figure>
        </div>
        <SomedIcons
          color="black"
        />
        <div className="space-y-6">
          <div style={{display: 'inline-block'}} className="buttons subtitle pb-2 space-y-6">
            <div className="pr-2">
              <Link href="/blog">
                <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Blog</a>
              </Link>
            </div>
            <div>
              <Link href="/oss-looking-for-funding">
                <a className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">Find  OSS projects that need support!</a>
              </Link>
            </div>
            <div>
            <div className="pb-2">Rate your favorite Star Trek characters</div>
              <Link href="https://qaplaornot.com/">
                <a target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
                  QaplaOrNot
                </a>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}