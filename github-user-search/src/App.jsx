// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './components/Search';

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>GitHub User Search</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Search />} />
            {/* Add additional routes here if needed */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

