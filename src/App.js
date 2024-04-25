import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Form from './pages/Form';

function App() {
  return (
    <Router>
      <div>
        {/* Define routes using Route component */}
        <Routes> {/* Use Routes to ensure only one route is rendered at a time */}
          <Route path="/" element={<Form />} /> {/* Use 'element' prop instead of children */}
        </Routes>
      </div>
    </Router>
  )
}

export default App;