import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Navbar } from './Navbar/Navbar.jsx'
// import App from './Filter/App.jsx'
import MyComponent from './tablefilter/MyComponent.jsx'
import LandingPage from './tablefilter/Navbar.jsx/Landing/LandingPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    {/* <App /> */}
{/* 
<Navbar/>
<App/>
 */}
{/* <LandingPage/> */}
  </React.StrictMode>,
)
