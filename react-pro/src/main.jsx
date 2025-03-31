import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Storecontextprovider from './context/Storecontext.jsx'
import Navbar from './components/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <Storecontextprovider>
    
    <App />
  </Storecontextprovider>

)
