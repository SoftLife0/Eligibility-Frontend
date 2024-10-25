import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Form from './pages/Form';
import Eligible from './pages/Eligible';
import Home from './pages/Home';
import Ineligible from './pages/Ineligible';
import TestForm from './pages/TestForm';

function App() {
  return (
    <Router>
      <div>
        {/* Define routes using Route component */}
        <Routes> {/* Use Routes to ensure only one route is rendered at a time */}
          <Route path="/form" element={<Form />} /> {/* Use 'element' prop instead of children */}
          <Route path="/testform" element={<TestForm />} /> {/* Use 'element' prop instead of children */}
          <Route path="/eligible" element={<Eligible />} /> {/* Use 'element' prop instead of children */}
          <Route path="/" element={<Home />} /> {/* Use 'element' prop instead of children */}
          <Route path="/ineligible" element={<Ineligible />} /> {/* Use 'element' prop instead of children */}
        </Routes>
      </div>
    </Router>
  )
}

export default App;