import { StrictMode } from 'react'
// This api rendering updates in bg without blocking the main thread
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Navbar/> */}
    <App />
  </StrictMode>,
)
