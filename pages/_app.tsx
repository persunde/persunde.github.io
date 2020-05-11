import React, { useEffect } from 'react';
import { config, library } from '@fortawesome/fontawesome-svg-core'
import Router from 'next/router'
import { initGA, logPageView } from '../lib/analytics'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'
library.add(faBars, faUser)

import 'github-markdown-css'
import '../styles/index.css'
import '../styles/index.scss'
import '../node_modules/highlight.js/styles/github.css';


export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    initGA()
    logPageView()
    Router.events.on('routeChangeComplete', logPageView)
  }, [])
  
  return <Component {...pageProps} />
}
