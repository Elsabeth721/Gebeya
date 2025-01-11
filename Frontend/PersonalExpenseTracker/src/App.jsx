import React from 'react';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddExpense from './components/AddExpense';
import ViewExpense from './components/ViewExpense';
import Dashboard from './components/Dashboard';
import Filter from './components/Filter';
function App() {
  return (
    <Router>
    <div className="flex">
      <Sidebar />
      
      <div className="flex-grow p-5 bg-slate-100 dark:bg-black" >
        <Routes>
          <Route path='/addExpense'  element={<AddExpense/>}></Route>
          <Route path='/viewExpense'  element={<ViewExpense/>}></Route>
          <Route path='/dashboard'  element={<Dashboard/>}></Route>
          <Route path='/filter' element={<Filter/>}></Route>
        </Routes>
      </div>
      
    </div>
    </Router>
  );
}

export default App;
