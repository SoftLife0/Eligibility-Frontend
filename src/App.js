import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Newform from './pages/Newform';
import Eligible from './pages/Eligible';
import Ineligible from './pages/Ineligible';
import Error from './pages/ErrorPage';
function App() {
  return (
    <Router>
      <div>
        {/* Define routes using Route component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Newform />} />
          <Route path="/eligible" element={<Eligible />} />
          <Route path="/ineligible" element={<Ineligible />} />
          <Route path="/error" element={<Error />} />
          
        </Routes>
      </div>
    </Router>
  )
}

export default App;