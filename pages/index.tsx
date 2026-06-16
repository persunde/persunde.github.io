import SomedIcons from '../components/somed-icons'

export default function Home() {
  return (
    <div className="App px-4">
      <div className="App-header flex space-y-8">
        <figure className="h-32 w-32" style={{display: 'inline-block'}}>
          <img alt="Per Sunde" className="rounded-full" src="/assets/index/geneve-anime.jpeg"/>
        </figure>
        <SomedIcons />

        <div className="max-w-2xl w-full text-left text-base space-y-2">
          <p>
            Full-stack engineer. When I was a kid I built whatever I could imagine with Lego. Now I build with TypeScript, Go, and Python and whatever else catches my interest.
          </p>
          <p>
            Into WASM with Go and Rust lately. If you haven&rsquo;t seen it yet, check out{' '}
            <a href="https://pglite.dev/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">PGlite</a>
            {' '} a fully embeddable Postgres running in the browser via WASM. Pretty wild.
          </p>

          <h3 className="font-bold text-lg mt-6 mb-2">Projects</h3>
          <div className="space-y-3">
            <div className="border-l-4 border-blue-500 bg-blue-50 rounded-lg p-4">
              <a href="https://soriapp.sunde.dev/" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-700 underline text-base">Sori AI</a>
              <p className="mt-1 text-sm text-gray-700">An AI-native Korean learning app (a better &ldquo;Duolingo alternative&rdquo;) with a real AI tutor chat. Shipped to web, Android, and iOS from a single TypeScript monorepo: an Expo React Native app and a Hono / Node backend streaming real-time responses from OpenAI and Claude via the Vercel AI SDK.</p>
            </div>
            <div className="border-l-4 border-emerald-500 bg-emerald-50 rounded-lg p-4">
              <a href="https://nordictechjobs.com/" target="_blank" rel="noopener noreferrer" className="font-bold text-emerald-700 underline text-base">Nordic Tech Jobs</a>
              <p className="mt-1 text-sm text-gray-700">Find English-speaking tech jobs across Norway, Sweden, Denmark, and Finland. Crawls job boards and uses AI to match openings to your resume. Built with Node.js, TypeScript, Puppeteer, and PostgreSQL · 30,000+ visitors/month.</p>
            </div>
            <div className="border-l-4 border-violet-500 bg-violet-50 rounded-lg p-4">
              <a href="https://easyk3s.dev/" target="_blank" rel="noopener noreferrer" className="font-bold text-violet-700 underline text-base">Easy K3S</a>
              <p className="mt-1 text-sm text-gray-700">A hands-on guide to running your own production Kubernetes cluster: K3S on Hetzner/VPS, Traefik ingress, cert-manager + Let&rsquo;s Encrypt, Longhorn storage, CloudNativePG, and a full Prometheus + Grafana + Loki stack.</p>
            </div>
            <div className="border-l-4 border-amber-500 bg-amber-50 rounded-lg p-4">
              <a href="https://sunde.dev/oss-looking-for-funding/" target="_blank" rel="noopener noreferrer" className="font-bold text-amber-700 underline text-base">OSS looking for funding</a>
              <p className="mt-1 text-sm text-gray-700">
                Find the open-source projects you actually depend on that are looking for funding.{' '}
                <a href="https://github.com/persunde/oss-looking-for-funding" target="_blank" rel="noopener noreferrer" className="text-amber-600 underline">(source)</a>
              </p>
            </div>
          </div>

          <h3 className="font-bold text-lg mt-6 mb-2">Currently</h3>
          <ul className="space-y-1 list-disc list-outside pl-5">
            <li>Consulting through Sunde Consulting</li>
            <li>Learning Korean</li>
          </ul>

          <h3 className="font-bold text-lg mt-6 mb-2">Reach me</h3>
          <p className="text-sm text-gray-600">
            For consulting inquiries, reach out on{' '}
            <a href="https://linkedin.com/in/per-sunde" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">LinkedIn</a>.
          </p>
        </div>
      </div>
    </div>
  )
}
