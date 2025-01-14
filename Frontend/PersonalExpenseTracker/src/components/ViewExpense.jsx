import React from 'react';

const expenses = [
  { id: 1, name: 'Groceries', amount: 50, date: '2025-01-08', category: 'Food' },
  { id: 2, name: 'Transport', amount: 15, date: '2025-01-07', category: 'Travel' },
  { id: 3, name: 'Rent', amount: 500, date: '2025-01-01', category: 'Housing' },

];

const ViewExpense = () => {
  return (
    <div className="bg-mainBackground min-h-screen p-6">
      <h1 className="text-3xl font-bold text-titleText mb-6">View Expenses</h1>
      <div className="bg-containerBackground shadow-lg rounded-lg p-4">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 text-left text-subtitleText font-medium">Expense Name</th>
                <th className="py-2 text-left text-subtitleText font-medium">Amount</th>
                <th className="py-2 text-left text-subtitleText font-medium">Date</th>
                <th className="py-2 text-left text-subtitleText font-medium">Category</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense) => (
                <tr key={expense.id} className="border-b">
                  <td className="py-2 px-4 text-mainDarkBackground">{expense.name}</td>
                  <td className="py-2 px-4 text-mainDarkBackground">${expense.amount}</td>
                  <td className="py-2 px-4 text-mainDarkBackground">{expense.date}</td>
                  <td className="py-2 px-4 text-mainDarkBackground">{expense.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewExpense;
