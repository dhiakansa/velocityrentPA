import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'animate.css/animate.min.css'
import './styles.css'
import  './style/ContactPage.css'
import './style/FleetPage.css'
import './style/HomePage.css'
import './style/OrderPage.css'
import './style/ServicePage.css'
import './style/TestimoniPage.css'
import './style/AboutPage.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
