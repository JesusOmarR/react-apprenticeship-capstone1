import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import './global.css'
import 'bootstrap/dist/css/bootstrap.min.css'

async function main() {
  // eslint-disable-next-line
  if (process.env.NODE_ENV === 'development') {
    const { worker } = require('./mock/browser')
    await worker.start()
  }
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

main()
