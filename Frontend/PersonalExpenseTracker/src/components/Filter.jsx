import React, { useEffect, useState } from 'react'
const Filter = () => {
  const [expenselist, setExpenselist]=useState([]);
  const [filteredExpenses, setFilteredExpenses]= useState([]);
  const [selectedCategory, setSelectedCategory]= useState([]);

  useEffect(()=>{
    const storedExpenses = JSON.parse(localStorage.getItem('expenselist'));
    setExpenselist(storedExpenses);
    setFilteredExpenses(storedExpenses);
  }, []);

  const categoryChange=(event)=>{
    const category =event.target.value;
    setSelectedCategory(category);

    if(category=== 'All'){
      setFilteredExpenses(expenselist);
    }
    else{
      const filteredList =expenselist.filter(expense => expense.category === category);
      setFilteredExpenses(filteredList);
    }
  };

  return (
    <div>
      <h1 className='font-bold text-3xl mb-4 text-center'>Filter Expense</h1>
      <div>
        <label htmlFor="category" className='block mb-2'>Select Category</label>
        <select name="category" id="category" onChange={categoryChange} value={selectedCategory} className='w-full p-2 border '>
          <option value="All">All</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Others">Others</option>
        </select>
      </div>
      {/* displaying the data that is filtered */}

      <div className='overflow-x-auto bg-white mt-5 rounded-lg shadow-lg'>
        <table className='min-w-full border'>
          <thead className=''>
            <tr className='border-b border-gray-200 dark:bg-border-gray-600'>
              <th className='py-2 px-4 text-left'>Name</th>
              <th className='py-2 px-4 text-left'>Category</th>
              <th className='py-2 px-4 text-left'>Amount</th>
              <th className='py-2 px-4 text-left'>Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredExpenses.map((expense, index)=> (
            <tr key={index} className='border-b border-gray-200 dark:bg-border-gray-600'>
              <td className='py-2 px-4 '>{expense.name}</td>
              <td className='py-2 px-4 '>{expense.category}</td>
              <td className='py-2 px-4 '>{expense.amount}</td>
              <td className='py-2 px-4 '>{expense.date}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Filter
