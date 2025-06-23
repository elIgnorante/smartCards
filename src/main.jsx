import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './css/app.css'
import { SmartCardsApp } from './SmartCardsApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <SmartCardsApp />
    </BrowserRouter>
  </StrictMode>
)
