import React, { useState } from 'react';

const AddExpense = () => {
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    date: '',
    category: '',
    notes: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className=" min-h-screen flex items-center justify-center">
      <div className="bg-containerBackground max-w-lg w-full p-8 rounded-lg shadow-lg">
        <h2 className="text-titleText text-2xl font-semibold mb-6 text-center">Add New Expense</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-subtitleText font-medium mb-2">
              Expense Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-lightBlue"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="amount" className="block text-subtitleText font-medium mb-2">
              Amount
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-lightBlue"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-subtitleText font-medium mb-2">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-lightBlue"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-subtitleText font-medium mb-2">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-lightBlue"
              required
            >
              <option value="">Select a category</option>
              <option value="food">Food</option>
              <option value="transport">Transport</option>
              <option value="entertainment">Entertainment</option>
              <option value="others">Others</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="notes" className="block text-subtitleText font-medium mb-2">
              Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-lightBlue"
              rows="4"
            />
          </div>
          <div className="flex justify-between">
          <button
              type="button"
              className="bg-lightBlue text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-red-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-lightGreen text-white py-2 px-4 rounded hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              Save
            </button>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddExpense;
