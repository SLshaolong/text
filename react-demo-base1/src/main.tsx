import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './assets/init.css'
import Index from './Index'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <Index/>
  </React.StrictMode>,
)
