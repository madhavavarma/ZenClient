import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as ReactDOM from 'react-dom'
import './index.css'
import App from './App.tsx'

if (import.meta.env.DEV) {
  import('@axe-core/react')
    .then(({ default: axe }) => {
      axe(React, ReactDOM, 1000)
    })
    .catch((error) => {
      console.warn('Axe could not be initialized:', error)
    })
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
