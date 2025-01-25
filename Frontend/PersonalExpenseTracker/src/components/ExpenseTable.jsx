import React, { useState } from "react";
import { FaEdit, FaTrash, FaCheck, FaTimes } from "react-icons/fa"; 

const ExpenseTable = ({ expenses, onUpdate, onDelete }) => {
  const [editIndex, setEditIndex] = useState(null); 
  const [editedExpense, setEditedExpense] = useState({});


  const handleInputChange = (field, value) => {
    setEditedExpense((prev) => ({ ...prev, [field]: value }));
  };


  const handleSave = (index) => {
    onUpdate(index, editedExpense);
    setEditIndex(null);
  };

  return (
    <div className="overflow-x-auto bg-white dark:bg-[#2A2929] mt-5 rounded-lg shadow-lg">
      <table className="min-w-full border">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-600">
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Category</th>
            <th className="py-2 px-4 text-left">Amount</th>
            <th className="py-2 px-4 text-left">Date</th>
            <th className="py-2 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index} className="border-b border-gray-200 dark:border-gray-600">
              {editIndex === index ? (
                <>
                  <td className="py-2 px-4">
                    <input
                      type="text"
                      value={editedExpense.name || expense.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="w-full border rounded px-2"
                    />
                  </td>
                  <td className="py-2 px-4">
                    <input
                      type="text"
                      value={editedExpense.category || expense.category}
                      onChange={(e) => handleInputChange("category", e.target.value)}
                      className="w-full border rounded px-2"
                    />
                  </td>
                  <td className="py-2 px-4">
                    <input
                      type="number"
                      value={editedExpense.amount || expense.amount}
                      onChange={(e) => handleInputChange("amount", e.target.value)}
                      className="w-full border rounded px-2"
                    />
                  </td>
                  <td className="py-2 px-4">
                    <input
                      type="date"
                      value={editedExpense.date || expense.date}
                      onChange={(e) => handleInputChange("date", e.target.value)}
                      className="w-full border rounded px-2"
                    />
                  </td>
                  <td className="py-2 px-4 flex items-center gap-2">
                    <button
                      className="text-green-600 hover:text-green-800"
                      onClick={() => handleSave(index)}
                    >
                      <FaCheck />
                    </button>
                    <button
                      className="text-red-600 hover:text-red-800"
                      onClick={() => setEditIndex(null)}
                    >
                      <FaTimes />
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td className="py-2 px-4">{expense.name}</td>
                  <td className="py-2 px-4">{expense.category}</td>
                  <td className="py-2 px-4">{expense.amount}</td>
                  <td className="py-2 px-4">{expense.date}</td>
                  <td className="py-2 px-4 flex items-center gap-2">
                    <button
                      className="text-blue-600 hover:text-blue-800"
                      onClick={() => {
                        setEditIndex(index);
                        setEditedExpense(expense);
                      }}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="text-red-600 hover:text-red-800"
                      onClick={() => onDelete(index)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
