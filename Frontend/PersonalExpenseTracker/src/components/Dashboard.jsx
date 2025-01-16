import React, { useEffect, useState } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Dashboard = () => {
  const [expenselist, setExpenselist] = useState([]);
  const [monthlyData, setMonthlyData] = useState([]);
  const [categoryData, setCategoryData] = useState({});

  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem('expenselist')) || [];
    setExpenselist(storedExpenses);

    // Group expenses by month for Bar Graph
    const groupedByMonth = storedExpenses.reduce((acc, expense) => {
      const month = new Date(expense.date).getMonth();
      acc[month] = (acc[month] || 0) + expense.amount;
      return acc;
    }, {});
    setMonthlyData(Object.values(groupedByMonth));

    // Group expenses by category for Doughnut Chart
    const groupedByCategory = storedExpenses.reduce((acc, expense) => {
      acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
      return acc;
    }, {});
    setCategoryData(groupedByCategory);
  }, []);

  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Monthly Expenses',
        data: monthlyData,
        backgroundColor: '#4caf50',
        borderColor: '#388E3C',
        borderWidth: 1,
      },
    ],
  };

  // Generate distinct colors for each category
  const generateColors = (count) => {
    const colors = [];
    for (let i = 0; i < count; i++) {
      colors.push(`hsl(${(i * 360) / count}, 70%, 50%)`);
    }
    return colors;
  };

  const categoryKeys = Object.keys(categoryData);
  const categoryColors = generateColors(categoryKeys.length);

  const doughnutData = {
    labels: categoryKeys,
    datasets: [
      {
        data: Object.values(categoryData),
        backgroundColor: categoryColors,
        borderColor: '#ffffff',
        borderWidth: 2,
        cutout: '90%', // Makes the chart look like a border only
      },
    ],
  };

  return (
    <div className="p-6 bg-white dark:bg-black rounded-lg">
      <h1 className="text-center text-2xl font-bold mb-6">Expense Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-lightGreen p-4 rounded-lg shadow">
          <h2 className="text-center text-lg font-bold mb-4">Expenses by Month</h2>
          <Bar data={barData} />
        </div>
        <div className="bg-lightBlue p-4 rounded-lg shadow">
          <h2 className="text-center text-lg font-bold mb-4">Expenses by Category</h2>
          <Doughnut data={doughnutData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
