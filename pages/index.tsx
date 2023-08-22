import Link from 'next/link'
import SomedIcons from '../components/somed-icons'

export default function Home() {
  return (
    <div className="App">

      <div className="App-header flex space-y-8">
        <figure className="h-32 w-32" style={{display: 'inline-block'}}>
          <img alt="Per Sunde" className="rounded-full" src="/assets/index/geneve-anime.jpeg"/>
        </figure>
        <SomedIcons
          color="black"
        />
        <div className="space-y-6">
          <div style={{display: 'inline-block'}} className="buttons subtitle pb-2 space-y-6">
            <div className="pr-2">
              <Link href="/blog">
                <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Blog</div>
              </Link>
            </div>
            <div>
              <Link href="/oss-looking-for-funding">
                <div className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">Find  OSS projects that need support!</div>
              </Link>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}