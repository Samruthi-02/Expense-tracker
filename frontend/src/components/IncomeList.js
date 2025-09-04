import React from "react";


const cardStyle = {
  background: 'linear-gradient(135deg, #e3f2fd 60%, #b3d4fc 100%)',
  border: '1px solid #b3d4fc',
  borderRadius: '18px',
  boxShadow: '0 6px 24px rgba(79,141,245,0.10)',
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
  boxShadow: '0 2px 8px rgba(79,141,245,0.10)',
  transition: 'transform 0.15s, box-shadow 0.15s, background 0.2s',
};

const IncomeList = ({ incomes, onEdit, onDelete }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {incomes.map((inc) => (
        <div key={inc._id} style={cardStyle} className="income-card">
          <span style={{ fontSize: '1.1rem', color: '#1e3a8a', fontWeight: 600 }}>
            <strong>{inc.source}</strong> <span style={{ color: '#4f8df5', fontWeight: 700 }}>₹{inc.amount}</span>
          </span>
          <div>
            <button
              style={{ ...btnStyle, background: 'linear-gradient(90deg, #5b8bf3ff, #0c306dff)', color: '#fff' }}
              className="animated-btn"
              onClick={() => onEdit(inc)}
              onMouseDown={e => e.currentTarget.style.transform = 'scale(0.95)'}
              onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >Edit</button>
            <button
              style={{ ...btnStyle, background: 'linear-gradient(90deg, #3b92c5ff, rgba(11, 48, 83, 1)',color: '#fff' }}
              className="animated-btn"
              onClick={() => onDelete(inc._id)}
              onMouseDown={e => e.currentTarget.style.transform = 'scale(0.95)'}
              onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >Delete</button>
          </div>
        </div>
      ))}
      <style>{`
        .income-card:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 10px 32px rgba(79,141,245,0.18);
        }
        .animated-btn:active {
          transform: scale(0.95);
        }
      `}</style>
    </div>
  );
};

export default IncomeList;
