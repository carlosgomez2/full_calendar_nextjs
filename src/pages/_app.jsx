import React from 'react'

import '@fullcalendar/common/main.css'
import '@fullcalendar/daygrid/main.css'
import '@fullcalendar/timegrid/main.css'
import '../styles/global-styles.scss'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}