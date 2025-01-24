import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from './components/Router/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
  </StrictMode>
)
