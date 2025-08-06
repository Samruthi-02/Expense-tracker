import React, { useEffect, useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null);

  const fetchExpenses = async () => {
    const res = await fetch("http://localhost:5000/api/expenses");
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async (expense) => {
    const res = await fetch("http://localhost:5000/api/expenses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(expense),
    });
    const newExpense = await res.json();
    setExpenses([...expenses, newExpense]);
  };

  const updateExpense = async (id, updatedExpense) => {
    await fetch(`http://localhost:5000/api/expenses/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedExpense),
    });
    setExpenses(
      expenses.map((exp) =>
        exp._id === id ? { ...exp, ...updatedExpense } : exp
      )
    );
    setEditingExpense(null);
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/api/expenses/${id}`, {
      method: "DELETE",
    });
    setExpenses(expenses.filter((exp) => exp._id !== id));
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ExpenseForm
        addExpense={addExpense}
        editingExpense={editingExpense}
        updateExpense={updateExpense}
      />
      <ExpenseList
        expenses={expenses}
        onEdit={setEditingExpense}
        onDelete={deleteExpense}
      />
    </div>
  );
}

export default App;
