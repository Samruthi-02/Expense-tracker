import React, { useState, useEffect } from "react";

const ExpenseForm = ({ addExpense, editingExpense, updateExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    if (editingExpense) {
      setTitle(editingExpense.title);
      setAmount(editingExpense.amount);
    }
  }, [editingExpense]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) return;

    const expense = { title, amount: Number(amount) };

    if (editingExpense) {
      updateExpense(editingExpense._id, expense);
    } else {
      addExpense(expense);
    }

    setTitle("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} style={{
      background: '#fff7f7',
      padding: '24px',
      borderRadius: '12px',
      boxShadow: '0 4px 16px rgba(211,47,47,0.08)',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      marginBottom: '24px',
      minWidth: '280px'
    }}>
      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          padding: '12px',
          border: '1px solid #cfd8dc',
          borderRadius: '6px',
          fontSize: '16px'
        }}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{
          padding: '12px',
          border: '1px solid #cfd8dc',
          borderRadius: '6px',
          fontSize: '16px'
        }}
      />
      <button type="submit" style={{
        padding: '12px',
        border: 'none',
        borderRadius: '6px',
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: '#2675d6ff',
        cursor: 'pointer',
        fontSize: '16px'
      }}>
        {editingExpense ? "Update Expense" : "Add Expense"}
      </button>
    </form>
  );
};

export default ExpenseForm;
