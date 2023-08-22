import Head from 'next/head';
import '../node_modules/github-markdown-css/github-markdown-light.css'
import '../styles/index.css'
import '../styles/index.scss'
// import '../node_modules/highlight.js/styles/github.css';


export default function MyApp({ Component, pageProps }) {
  let analytics = null
  if (process.env.NODE_ENV === "production") {
    analytics = <script async defer data-website-id="74444df2-7306-41d7-b127-6463fcb046c3" src="https://umami.nordictechjobs.com/umami.js"></script>
  }
  return (
    <>
      <Head>
        <title>per.sunde.developer</title>
        <link rel="icon" href="/favicon/favicon.ico" />
        {analytics}
      </Head>
      <Component {...pageProps} />
    </>
  )
}
