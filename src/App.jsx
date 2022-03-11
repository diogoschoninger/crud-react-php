import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import { Home } from './pages/Home';
import { Cadastrar } from './pages/Cadastrar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cadastrar" element={<Cadastrar/>} />
      </Routes>
    </Router>
  );
}

export default App;
