import React, { useEffect, useState } from "react";
import ExpenseTable from "./ExpenseTable";

const ViewExpense = () => {
  const [expenselist, setExpenselist] = useState([]);


  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem("expenselist")) || [];
    setExpenselist(storedExpenses);
  }, []);


  const handleDelete = (index) => {
    const updatedExpenses = expenselist.filter((_, i) => i !== index);
    setExpenselist(updatedExpenses);
    localStorage.setItem("expenselist", JSON.stringify(updatedExpenses));
  };


  const handleUpdate = (index, updatedExpense) => {
    const updatedExpenses = [...expenselist];
    updatedExpenses[index] = updatedExpense;
    setExpenselist(updatedExpenses);
    localStorage.setItem("expenselist", JSON.stringify(updatedExpenses));
  };

  return (
    <div className="text-black dark:text-white min-h-screen">
      <h1 className="text-center font-bold text-3xl mb-3 p-4">View Expenses</h1>
      <ExpenseTable
        expenses={expenselist}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default ViewExpense;
