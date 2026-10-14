import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Here we create a virtual DOM root with the help of function createRoot() method and .render() method which render this App JSX in main.jsx file with Strict Mode checker from react so we don't make mistakes and other issues like optimization etc.   
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> 
    {/* App is the main thing from where we are starting building our Application Frontend */}
  </StrictMode>
)
