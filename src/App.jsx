import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
// Importa otros componentes que vayas a usar
// import Dashboard from './Dashboard';
// import Register from './Register';

function App() {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/" element={<Login />} />
                    {/* Ejemplos de otras rutas que podrías agregar:
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/register" element={<Register />} />
                    */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;