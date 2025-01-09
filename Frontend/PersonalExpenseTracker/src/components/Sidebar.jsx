import React, { useState } from 'react';

const Sidebar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="h-screen bg-lightBlue dark:bg-gray-900 w-64 text-white dark:text-gray-300 p-5">
      <h2 className="text-2xl font-bold mb-6">Expense Tracker</h2>
      <ul>
        <li className="mb-4">
          <a href="#" className="hover:text-gray-300">Home</a>
        </li>
        <li className="mb-4">
          <a href="#" className="hover:text-gray-300">Add Expense</a>
        </li>
        <li className="mb-4">
          <a href="#" className="hover:text-gray-300">View Expenses</a>
        </li>
        <li className="mb-4">
          <a href="#" className="hover:text-gray-300">Summary</a>
        </li>
      </ul>
      <div className="mt-auto">
        <button 
          onClick={toggleDarkMode} 
          className="bg-lightGreen dark:bg-gray-700 text-white py-2 px-4 rounded mt-6 w-full"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
