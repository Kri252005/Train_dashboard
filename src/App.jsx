import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './pages/Dashboard';
import Trains from './pages/Trains';
import DigitalTwin from './pages/DigitalTwin';
import Spares from './pages/Spares';
import Logs from './pages/Logs';
import Depots from './pages/Depots';

const App = () => {
  return (
    <Router>
      <div className="flex h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-metro-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-metro-green-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-metro-purple-500/5 rounded-full blur-3xl animate-float"></div>
        </div>
        
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden relative z-10">
          <Topbar />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gradient-to-br from-slate-50/95 to-blue-50/95 backdrop-blur-sm p-6 animate-fade-in">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/trains" element={<Trains />} />
              <Route path="/twin" element={<DigitalTwin />} />
              <Route path="/spares" element={<Spares />} />
              <Route path="/logs" element={<Logs />} />
              <Route path="/depots" element={<Depots />} />
              <Route path="/" element={<Navigate to="/dashboard" />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;