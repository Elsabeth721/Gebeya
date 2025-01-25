import React, { useEffect, useState } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem('expenselist')) || [];
    setExpenses(storedExpenses);
  }, []);

  const allowedCategories = ["Food", "Transport", "Entertainment", "Others"];

  const groupedByMonth = expenses.reduce((acc, expense) => {
    const month = new Date(expense.date).getMonth();
    acc[month] = (acc[month] || 0) + parseFloat(expense.amount); 
    return acc;
  }, {});

  
  const groupedByCategory = expenses.reduce((acc, expense) => {
    if (allowedCategories.includes(expense.category)) {
      acc[expense.category] = (acc[expense.category] || 0) + parseFloat(expense.amount); 
    }
    return acc;
  }, {});


  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Monthly Expenses',
        data: Array.from({ length: 12 }, (_, i) => groupedByMonth[i] || 0),
        backgroundColor: '#4caf50',
        borderColor: '#388E3C',
        borderWidth: 1,
      },
    ],
  };


  const categoryKeys = Object.keys(groupedByCategory);
  const categoryColors = categoryKeys.map((_, i) => `hsl(${(i * 360) / categoryKeys.length}, 70%, 50%)`);

  const doughnutData = {
    labels: categoryKeys,
    datasets: [
      {
        data: Object.values(groupedByCategory),
        backgroundColor: categoryColors,
        borderColor: '#ffffff',
        borderWidth: 2,
        cutout: '90%',
      },
    ],
  };

  return (
    <div className='text-black dark:text-white'>
      <h1 className="text-center text-2xl font-bold mb-6 ">Expense Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-[#2A2929] p-4 rounded-lg shadow">
          <h2 className="text-center text-lg font-bold mb-4">Expenses by Month</h2>
          <Bar data={barData} />
        </div>
        <div className="bg-white dark:bg-[#2A2929] p-4 rounded-lg shadow">
          <h2 className="text-center text-lg font-bold mb-4">Expenses by Category</h2>
          <Doughnut data={doughnutData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
