import React, { useEffect, useState } from 'react'

const ViewExpense = () => {
  const [expenselist, setExpenselist]= useState([]);

  useEffect(()=>{
    const storedExpenses= JSON.parse(localStorage.getItem('expenselist')) || [];
    setExpenselist(storedExpenses);
  }, []);
  return (
    <div >
      <h1 className='text-center font-bold text-3xl mb-3 p-4'>View Expenses</h1>
      <div className='p-5 overflow-x-auto bg-white dark:bg-black rounded-lg shadow-lg'>
        <table className='min-w-full '>
          <thead >
          <tr className='border-b border-gray-200 dark:bg-border-gray-600'>
            <th className='py-2 text-left'>Title</th>
            <th className='py-2 text-left'>Category</th>
            <th className='py-2 text-left'>Amount</th>
            <th className='py-2 text-left'>Date</th>
          </tr>
          </thead>
          <tbody>
            {expenselist.map((expense, index)=>(
            <tr key={index} className='border-b border-gray-200 dark:bg-border-gray-600 '>
              <td className='py-2 px-4'>{expense.name}</td>
              <td className='py-2 px-4'>{expense.category}</td>
              <td className='py-2 px-4'>{expense.amount}</td>
              <td className='py-2 px-4'>{expense.date}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ViewExpense
