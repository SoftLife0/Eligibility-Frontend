import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
// import Form from './pages/Form';
import Eligible from './pages/Eligible';
import Home from './pages/Home';
import Ineligible from './pages/Ineligible';
import TestForm from './pages/TestForm';
import Newform from './pages/Newform';
import Error from './pages/ErrorPage';
function App() {
  return (
    <Router>
      <div>
        {/* Define routes using Route component */}
        <Routes> {/* Use Routes to ensure only one route is rendered at a time */}
          <Route path="/form" element={<Newform />} /> {/* Use 'element' prop instead of children */}
          <Route path="/testform" element={<TestForm />} />
          <Route path="/eligible" element={<Eligible />} />
          <Route path="/" element={<Home />} />
          <Route path="/ineligible" element={<Ineligible />} />
          <Route path="/ineligible" element={<Ineligible />} />
          <Route path="/error" element={<Error />} />
          
        </Routes>
      </div>
    </Router>
  )
}

export default App;