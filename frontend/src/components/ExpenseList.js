import React from "react";
import ExpenseItem from "./ExpenseItem";


const cardStyle = {
  background: 'linear-gradient(135deg, #fff7f7 60%, #ffd6d6 100%)',
  border: '1px solid #ffd6d6',
  borderRadius: '18px',
  boxShadow: '0 6px 24px rgba(211,47,47,0.10)',
  padding: '22px 28px',
  marginBottom: '22px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  minWidth: '320px',
  maxWidth: '480px',
  transition: 'transform 0.18s cubic-bezier(.4,2,.6,1), box-shadow 0.18s',
};

const btnStyle = {
  fontWeight: 'bold',
  border: 'none',
  borderRadius: '8px',
  padding: '10px 18px',
  marginLeft: '12px',
  fontSize: '15px',
  cursor: 'pointer',
  boxShadow: '0 2px 8px rgba(211,47,47,0.10)',
  transition: 'transform 0.15s, box-shadow 0.15s, background 0.2s',
};

const ExpenseList = ({ expenses, onEdit, onDelete }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {expenses.map((exp) => (
        <div key={exp._id} style={cardStyle} className="expense-card">
          <span style={{ fontSize: '1.1rem', color: '#b21f1f', fontWeight: 600 }}>
            <strong>{exp.title}</strong> <span style={{ color: '#d32f2f', fontWeight: 700 }}>₹{exp.amount}</span>
          </span>
          <div>
            <button
              style={{ ...btnStyle, background: 'linear-gradient(90deg, #ff9800, #d32f2f)', color: '#fff' }}
              className="animated-btn"
              onClick={() => onEdit(exp)}
              onMouseDown={e => e.currentTarget.style.transform = 'scale(0.95)'}
              onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >Edit</button>
            <button
              style={{ ...btnStyle, background: 'linear-gradient(90deg, #d32f2f, #ff6a6a)', color: '#fff' }}
              className="animated-btn"
              onClick={() => onDelete(exp._id)}
              onMouseDown={e => e.currentTarget.style.transform = 'scale(0.95)'}
              onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >Delete</button>
          </div>
        </div>
      ))}
      <style>{`
        .expense-card:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 10px 32px rgba(211,47,47,0.18);
        }
        .animated-btn:active {
          transform: scale(0.95);
        }
      `}</style>
    </div>
  );
};

export default ExpenseList;
