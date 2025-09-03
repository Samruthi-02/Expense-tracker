import React, { useState, useEffect } from "react";

const IncomeForm = ({ addIncome, editingIncome, updateIncome }) => {
  const [source, setSource] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    if (editingIncome) {
      setSource(editingIncome.source);
      setAmount(editingIncome.amount);
    }
  }, [editingIncome]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!source || !amount) return;

    const income = { source, amount: Number(amount) };

    if (editingIncome) {
      updateIncome(editingIncome._id, income);
    } else {
      addIncome(income);
    }

    setSource("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} style={{
      background: '#f5faff',
      padding: '24px',
      borderRadius: '12px',
      boxShadow: '0 4px 16px rgba(79,141,245,0.08)',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      marginBottom: '24px',
      minWidth: '280px'
    }}>
      <input
        type="text"
        placeholder="Income Source"
        value={source}
        onChange={(e) => setSource(e.target.value)}
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
        backgroundColor: '#4f8df5',
        cursor: 'pointer',
        fontSize: '16px'
      }}>
        {editingIncome ? "Update Income" : "Add Income"}
      </button>
    </form>
  );
};

export default IncomeForm;
