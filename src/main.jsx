// main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import FeaturesPage from './pages/Features.jsx'
import OfferPage from './pages/Offer.jsx'
import ContactPage from './pages/Contact.jsx'
import AboutPage from './pages/About.jsx'
import AuthPage from './pages/Auth.jsx'          // ← if Auth.jsx is in /pages
// import AuthPage from './Auth.jsx'             // ← use this line if Auth.jsx is NOT in /pages


import './styles.css'

function Router() {
  // normalize trailing slashes so "/profile/" works
  const rawPath = window.location.pathname
  const pathname = rawPath.replace(/\/+$/, '') || '/'
  const search   = window.location.search

  // Allow /auth?mode=login|signup|reset, and pretty paths /login or /signup
  const searchMode = new URLSearchParams(search).get('mode')
  const pathMode =
    pathname === '/login'  ? 'login'  :
    pathname === '/signup' ? 'signup' :
    undefined
  const defaultMode = searchMode || pathMode || 'login'

  if (pathname === '/features') return <FeaturesPage />
  if (pathname === '/offer')    return <OfferPage />
  if (pathname === '/contact')  return <ContactPage />
  if (pathname === '/about')    return <AboutPage />
  if (pathname === '/profile')  return <ProfilePage />


  // Auth routes (all map to the same page)
  if (pathname === '/auth' || pathname === '/login' || pathname === '/signup') {
    return <AuthPage defaultMode={defaultMode} />
  }


  // Home
  return <App />
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)
