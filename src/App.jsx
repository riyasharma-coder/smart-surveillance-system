import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import LiveView from './pages/LiveView'
import Events from './pages/Events'
import Analytics from './pages/Analytics'
import AdminPanel from './pages/AdminPanel'

function App() {
  return (
    <Router>
      {/* Navbar will appear on all pages */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/live" element={<LiveView />} />
        <Route path="/events" element={<Events />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  )
}

export default App


