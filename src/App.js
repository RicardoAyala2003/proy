import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login'; // Importamos el componente de Login
import SideMenu from './components/SideMenu/SideMenu'; // Importamos el SideMenu

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta para Login */}
        <Route path="/login" element={<Login />} />

        {/* Ruta para el Dashboard */}
        <Route path="/dashboard/*" element={<SideMenu />} />

        {/* Redirección predeterminada al Login */}
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
