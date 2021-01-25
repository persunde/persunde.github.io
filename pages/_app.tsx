import React from 'react';
import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'
library.add(faBars, faUser)

import 'github-markdown-css'
import '../styles/index.css'
import '../styles/index.scss'
import '../node_modules/highlight.js/styles/github.css';


export default function MyApp({ Component, pageProps }) {
  let analytics = null
  if (process.env.NODE_ENV === "production") {
    analytics = <script async defer data-website-id="cf736c86-83fe-4aa8-a589-dcdc16b8498e" src="https://analytics.nordictechjobs.com/umami.js"></script>
  }
  return (
    <>
      {analytics}
      <Component {...pageProps} />
    </>
  )
}
