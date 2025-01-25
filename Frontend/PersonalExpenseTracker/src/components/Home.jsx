import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-white dark:bg-[#2A2929] min-h-screen flex items-center justify-center px-4 rounded shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
       
        <div className="text-center md:text-left flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-300 mb-4">
            Welcome to your Personal Expense Tracker
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6">
            Easily manage your expenses, filter by categories, and track your financial journey.
          </p>
          <button className="bg-purple-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-purple-700 transition ease-in-out">
            Get Started
          </button>
        </div>


        <div className="flex-1">
          <img
            src="/1 (1).png" 
            alt="Expense Tracker Illustration"
            className="w-full h-auto md:h-[500px] transform rotate-6 "
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
