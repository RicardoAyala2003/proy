import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login'; // Importamos el componente de Login
import SideMenu from './components/SideMenu/SideMenu'; // Importamos el SideMenu
import { Provider, useSelector } from 'react-redux';
import { store, persistor } from './store/configureStore';
import { PersistGate } from 'redux-persist/integration/react';

function App() {


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
      </PersistGate>
    </Provider>
  );
}

export default App;
