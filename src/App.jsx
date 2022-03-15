import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import { Home } from './pages/Home';
import { Cadastrar } from './pages/Cadastrar';
import { Visualizar } from './pages/Visualizar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cadastrar" element={<Cadastrar/>} />
        <Route path="/visualizar/:id" element={<Visualizar/>}/>
      </Routes>
    </Router>
  );
}

export default App;
