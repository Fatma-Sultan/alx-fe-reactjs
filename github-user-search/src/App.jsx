import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>GitHub User Search</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<div>Home</div>} />
            <Route path="/search" element={<div>Search</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

