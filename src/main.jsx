import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from './routes/index.jsx'
import './main.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
  </StrictMode>
)
