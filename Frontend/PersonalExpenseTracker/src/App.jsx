import React from 'react';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AddExpense from './components/AddExpense';
import ViewExpense from './components/ViewExpense';
import Dashboard from './components/Dashboard';
import Filter from './components/Filter';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar for navigation */}
        <Sidebar />

        {/* Main content */}
        <div className="flex-grow p-5 bg-slate-100 dark:bg-black">
          <Routes>
            {/* Default route to Home */}
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/addExpense" element={<AddExpense />} />
            <Route path="/viewExpense" element={<ViewExpense />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/filter" element={<Filter />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
