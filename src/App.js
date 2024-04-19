import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationForm from './regForm'

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;

