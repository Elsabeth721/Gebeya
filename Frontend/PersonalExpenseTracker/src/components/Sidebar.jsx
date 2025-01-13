import React, { useState } from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./darkMode";

const Sidebar = () => {
  return (
    <div className="h-screen bg-slate-300 dark:bg-slate-900 w-64 text-gray-900 dark:text-gray-300 p-5 sticky top-0 ">
      <h2 className="text-2xl font-bold mb-6">Personal Expense Tracker</h2>
      <ul>
        <li className="mb-4">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/addExpense" className="hover:text-gray-400">
            Add Expense
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/viewExpense" className="hover:text-gray-400">
            View Expense
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/dashboard" className="hover:text-gray-400">
            Dashboard
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/filter" className="hover:text-gray-400">
            Filter
          </Link>
        </li>
      </ul>
      <DarkModeToggle />
    </div>
  );
};

export default Sidebar;
