import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AuthContext from './Config/Auth.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthContext>
      <App />
      </AuthContext> {/* Pooray app ko wrap karo */}
    </BrowserRouter>
  </React.StrictMode>,
)