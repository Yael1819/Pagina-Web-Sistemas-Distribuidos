import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Mexico from './pages/Mexico/Mexico';
import EstadosUnidos from './pages/EstadosUnidos/EstadosUnidos';
import Canada from './pages/Canada/Canada';
import Historia from './pages/Historia/Historia';
import Grupos from './pages/Grupos/Grupos';
import Avance from './pages/Avance/Avance';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mexico" element={<Mexico />} />
      <Route path="/estados-unidos" element={<EstadosUnidos />} />
      <Route path="/canada" element={<Canada />} />
      <Route path="/historia" element={<Historia />} />
      <Route path="/grupos" element={<Grupos />} />
      <Route path="/avance" element={<Avance />} />
    </Routes>
  );
}

export default App;