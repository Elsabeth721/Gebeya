import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; 
import DarkModeToggle from "./darkMode";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="md:hidden">
        <button
          onClick={toggleSidebar}
          className="text-gray-900 dark:text-gray-300"
          aria-label="Toggle Sidebar"
        >
          {!isOpen ? (
            <FaBars className="w-6 h-6 fixed top-2 left-2" />
          ) : (
            <FaTimes className="w-6 h-6" />
          )}
        </button>
      </div>

     
      <div
        className={`fixed inset-y-0 left-0 z-50 bg-slate-300 dark:bg-slate-900 w-64 text-gray-900 dark:text-gray-300 p-5 transition-transform duration-300 ease-in-out md:static md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
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
        <DarkModeToggle/>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
