import React from 'react'
import ReactDOM from 'react-dom'
import App from 'App'
import reportWebVitals from 'reportWebVitals'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'

import './fonts/Poppins-Regular.ttf'
import './fonts/Poppins-Medium.ttf'
import './fonts/Poppins-SemiBold.ttf'
import './index.css'

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DSN || '',
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
  })
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
