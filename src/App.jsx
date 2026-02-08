import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './components/layout/DashboardLayout';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="properties" element={<div className="text-2xl text-white p-10">Properties Module (Coming Soon)</div>} />
          <Route path="showings" element={<div className="text-2xl text-white p-10">Showings Module (Coming Soon)</div>} />
          <Route path="deals" element={<div className="text-2xl text-white p-10">Deals Pipeline (Full View Coming Soon)</div>} />
          <Route path="settings" element={<div className="text-2xl text-white p-10">Settings</div>} />
          {/* Catch all redirect to dashboard */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
