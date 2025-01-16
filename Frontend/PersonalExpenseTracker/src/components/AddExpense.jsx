import React, { useState } from "react";

const AddExpense = () => {
  const [expense, setExpense] = useState({
    name: "",
    amount: "",
    date: "",
    category: "",
    detail: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense({ ...expense, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const expenselist = JSON.parse(localStorage.getItem("expenselist")) || [];
    expenselist.push(expense);
    localStorage.setItem("expenselist", JSON.stringify(expenselist));
    setExpense({ name: " ", amount: "", date: "", category: "", detail: "" });
    alert("Expense added!!!");
  };
  return (
    <div className="min-h-screen p-6 items-center justify-center">
      <h1 className="mb-4 text-center text-3xl font-bold">Add Expense</h1>
      <div className="bg-white rounded-lg shadow-lg p-4">
        <form onSubmit={handleSubmit} className="">
          <div className="mb-4">
            <label className="block mb-2">Expense Title</label>
            <input
              type="text"
              name="name"
              value={expense.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Amount</label>
            <input
              type="number"
              name="amount"
              value={expense.amount}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Date</label>
            <input
              type="date"
              name="date"
              value={expense.date}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Category</label>
            <select
              name="category"
              id="category"
              value={expense.category}
              onChange={handleChange}
              className="w-full p-2 rounded border"
            >
              <option value="Food">Food</option>
              <option value="Transport">Transport</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Detail</label>
            <textarea
              name="detail"
              id="detail"
              className="w-full p-2 border rounded"
            ></textarea>
          </div>
          <button type="submit" className="bg-slate-400 p-2 rounded text-white">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddExpense;
