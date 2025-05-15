import { StrictMode } from 'react'
// This api rendering updates in bg without blocking the main thread
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Navbar/> */}
    <App />
  </StrictMode>,
)
