import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles.css'

if (import.meta.env.DEV) {
  const { worker } = await import('./mocks/browser')
  await worker.start()
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
