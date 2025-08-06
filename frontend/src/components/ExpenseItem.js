import React from "react";

const ExpenseItem = ({ expense, onEdit, onDelete }) => {
  return (
    <li>
      <span>
        <strong>{expense.title}</strong> - ₹{expense.amount}
      </span>
      <button onClick={() => onEdit(expense)}>Edit</button>
      <button onClick={() => onDelete(expense._id)}>Delete</button>
    </li>
  );
};

export default ExpenseItem;
