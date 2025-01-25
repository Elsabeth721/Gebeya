import React, { useEffect, useState } from 'react';
import ExpenseTable from './ExpenseTable';

const Filter = () => {
  const [expenselist, setExpenselist] = useState([]);
  const [filteredExpenses, setFilteredExpenses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem('expenselist')) || [];
    setExpenselist(storedExpenses);
    setFilteredExpenses(storedExpenses);
  }, []);

  const categoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);

    if (category === 'All') {
      setFilteredExpenses(expenselist);
    } else {
      const filteredList = expenselist.filter((expense) => expense.category === category);
      setFilteredExpenses(filteredList);
    }
  };

  return (
    <div className="text-black dark:text-white min-h-screen">
      <h1 className="font-bold text-3xl mb-4 text-center">Filter Expense</h1>
      <div>
        <label htmlFor="category" className="block mb-2">
          Select Category
        </label>
        <select
          name="category"
          id="category"
          onChange={categoryChange}
          value={selectedCategory}
          className="w-full p-2 border text-black"
        >
          <option value="All">All</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Others">Others</option>
        </select>
      </div>
      <ExpenseTable expenses={filteredExpenses} />
    </div>
  );
};

export default Filter;
