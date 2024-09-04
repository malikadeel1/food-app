import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
// import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './context/StoreContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
  <StoreContextProvider>
  <App/>
  </StoreContextProvider>
   
    </BrowserRouter>
  // </StrictMode>,
)
