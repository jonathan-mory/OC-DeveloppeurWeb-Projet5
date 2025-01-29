import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from './components/Router/index.jsx'
import './main.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
  </StrictMode>
)
