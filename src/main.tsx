// @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
