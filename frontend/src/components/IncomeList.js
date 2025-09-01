import React from "react";

const IncomeList = ({ incomes, onEdit, onDelete }) => {
  return (
    <ul>
      {incomes.map((inc) => (
        <li key={inc._id} style={{ background: '#e3f2fd', borderLeft: '5px solid #4f8df5', padding: '15px 20px', borderRadius: '8px', marginBottom: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
          <span>
            <strong>{inc.source}</strong> - ₹{inc.amount}
          </span>
          <div>
            <button style={{ backgroundColor: '#00c853', color: '#fff', fontWeight: 'bold', border: 'none', borderRadius: '6px', padding: '8px 10px', marginLeft: '10px', fontSize: '14px', cursor: 'pointer' }} onClick={() => onEdit(inc)}>Edit</button>
            <button style={{ backgroundColor: '#d32f2f', color: '#fff', fontWeight: 'bold', border: 'none', borderRadius: '6px', padding: '8px 10px', marginLeft: '10px', fontSize: '14px', cursor: 'pointer' }} onClick={() => onDelete(inc._id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default IncomeList;
