import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import SavingsHeader from "./components/SavingsHeader";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import IncomeForm from "./components/IncomeForm";
import IncomeList from "./components/IncomeList";
import Header from "./components/Header";
import "./App.css";

// Enhanced Front page component with animations and interactive elements
function FrontPage() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    // Create floating elements animation
    const container = document.querySelector('.front-page');
    for (let i = 0; i < 15; i++) {
      const shape = document.createElement('div');
      shape.classList.add('floating-shape');
      shape.style.left = `${Math.random() * 100}%`;
      shape.style.top = `${Math.random() * 100}%`;
      shape.style.animationDuration = `${15 + Math.random() * 20}s`;
      shape.style.animationDelay = `${Math.random() * 5}s`;
      shape.style.width = `${10 + Math.random() * 30}px`;
      shape.style.height = shape.style.width;
      shape.style.opacity = `${0.2 + Math.random() * 0.3}`;
      shape.style.background = i % 3 === 0 ? '#4f8df5' : i % 3 === 1 ? '#ff7b7b' : '#4cd964';
      shape.style.borderRadius = i % 4 === 0 ? '50%' : '10%';
      container.appendChild(shape);
    }
  }, []);

  return (
    <div className="front-page" style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      background: "linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d)",
      backgroundSize: "400% 400%",
      animation: "gradientShift 15s ease infinite",
      overflow: "hidden",
      position: "relative"
    }}>
      {/* Animated Coin */}
      <div style={{
        width: "120px",
        height: "120px",
        borderRadius: "50%",
        background: "linear-gradient(135deg, #FFD700, #D4AF37, #FFD700)",
        boxShadow: "0 0 20px rgba(255, 215, 0, 0.6), inset 0 0 10px rgba(255, 255, 255, 0.8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "40px",
        animation: "rotateCoin 5s infinite linear",
        transformStyle: "preserve-3d",
        position: "relative"
      }}>
        <div style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          background: "rgba(0, 0, 0, 0.1)",
          transform: "translateZ(-5px)"
        }}></div>
        <span style={{
          fontSize: "1.8rem",
          fontWeight: "bold",
          color: "#8B7500"
        }}>₹</span>
      </div>

      <h1 style={{ 
        fontSize: "3.5rem", 
        color: "white", 
        fontWeight: "bold",
        textShadow: "0 2px 10px rgba(0,0,0,0.3)",
        marginBottom: "20px"
      }}>
        Expense Tracker Pro
      </h1>
      
      <p style={{
        fontSize: "1.4rem",
        color: "rgba(255, 255, 255, 0.9)",
        maxWidth: "600px",
        textAlign: "center",
        marginBottom: "40px",
        textShadow: "0 1px 4px rgba(0,0,0,0.2)"
      }}>
        Track your expenses, manage your budget, and achieve your financial goals with our intuitive expense tracker.
      </p>
      
      <div style={{ display: "flex", gap: "20px" }}>
        <button
          style={{
            padding: "16px 40px",
            fontSize: "1.2rem",
            fontWeight: "bold",
            background: isHovered ? "#3b6bc9" : "#4f8df5",
            color: "#fff",
            border: "none",
            borderRadius: "50px",
            cursor: "pointer",
            boxShadow: "0 4px 15px rgba(79, 141, 245, 0.4)",
            transition: "all 0.3s ease",
            transform: isHovered ? "translateY(-2px)" : "none"
          }}
          onClick={() => navigate("/login")}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Get Started
        </button>
        
        <button
          style={{
            padding: "16px 40px",
            fontSize: "1.2rem",
            fontWeight: "bold",
            background: "transparent",
            color: "#fff",
            border: "2px solid rgba(255, 255, 255, 0.7)",
            borderRadius: "50px",
            cursor: "pointer",
            transition: "all 0.3s ease"
          }}
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </button>
      </div>
      
      {/* Feature highlights */}
      <div style={{
        display: "flex",
        gap: "40px",
        marginTop: "60px"
      }}>
        {[
          { icon: "📊", title: "Track Expenses", desc: "Monitor spending habits" },
          { icon: "💰", title: "Manage Income", desc: "Keep income organized" },
          { icon: "🎯", title: "Set Goals", desc: "Achieve financial targets" }
        ].map((feature, index) => (
          <div key={index} style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            padding: "20px",
            borderRadius: "15px",
            textAlign: "center",
            width: "180px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            animation: `float 4s ease-in-out ${index * 0.5}s infinite`
          }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "10px" }}>{feature.icon}</div>
            <h3 style={{ color: "white", margin: "10px 0 5px" }}>{feature.title}</h3>
            <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "0.9rem" }}>{feature.desc}</p>
          </div>
        ))}
      </div>
      
      {/* CSS Animations */}
      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          @keyframes rotateCoin {
            0% { transform: rotateY(0deg); }
            100% { transform: rotateY(360deg); }
          }
          
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          
          .floating-shape {
            position: absolute;
            animation-name: floating;
            animation-iteration-count: infinite;
            animation-timing-function: ease-in-out;
          }
          
          @keyframes floating {
            0% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(10px, 10px) rotate(180deg); }
            100% { transform: translate(0, 0) rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}

// Custom Login component to redirect after successful login
function LoginWithRedirect() {
  const navigate = useNavigate();
  const handleLogin = (data) => {
    if (data.token) {
      localStorage.setItem('token', data.token);
    }
    navigate("/tracker");
  };
  return <Login onLogin={handleLogin} />;
}

function App() {
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null);
  const [incomes, setIncomes] = useState([]);
  const [editingIncome, setEditingIncome] = useState(null);

  // Fetch expenses from backend (with JWT)
  // Fetch incomes
// Fetch incomes
const fetchIncomesReal = async () => {
  const token = localStorage.getItem("token");
  const res = await fetch("/api/incomes", {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
  const data = await res.json();
  setIncomes(Array.isArray(data) ? data : []);
};

// Fetch expenses
const fetchExpensesReal = async () => {
  const token = localStorage.getItem("token");
  const res = await fetch("/api/expenses", {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
  const data = await res.json();
  setExpenses(Array.isArray(data) ? data : []);
};


  // Totals
  const incomeTotal = incomes.reduce((sum, inc) => sum + Number(inc.amount), 0);
  const expenseTotal = expenses.reduce((sum, exp) => sum + Number(exp.amount), 0);
  const savingsTotal = incomeTotal - expenseTotal;

  useEffect(() => {
    fetchExpensesReal();
    fetchIncomesReal();
  }, []);

const addExpense = async (expense) => {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch("/api/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify(expense),
    });
    if (!res.ok) throw new Error("Failed to add expense");
    const newExpense = await res.json();
    setExpenses((prev) => [...prev, newExpense]);
  } catch (err) {
    console.error(err.message);
  }
};


  const updateExpense = async (id, updatedExpense) => {
    const token = localStorage.getItem('token');
    await fetch(`/api/expenses/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {})
      },
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
    const token = localStorage.getItem('token');
    await fetch(`/api/expenses/${id}`, {
      method: "DELETE",
      headers: token ? { Authorization: `Bearer ${token}` } : {}
    });
    setExpenses(expenses.filter((exp) => exp._id !== id));
  };

  // Income handlers
const addIncome = async (income) => {
  const token = localStorage.getItem("token");
  const res = await fetch("/api/incomes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(income),
  });
  const newIncome = await res.json();
  setIncomes((prev) => [...prev, newIncome]);
};

const updateIncome = async (id, updatedIncome) => {
  const token = localStorage.getItem("token");
  await fetch(`/api/incomes/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(updatedIncome),
  });
  setIncomes(
    incomes.map((inc) =>
      inc._id === id ? { ...inc, ...updatedIncome } : inc
    )
  );
  setEditingIncome(null);
};

const deleteIncome = async (id) => {
  const token = localStorage.getItem("token");
  await fetch(`/api/incomes/${id}`, {
    method: "DELETE",
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
  setIncomes(incomes.filter((inc) => inc._id !== id));
};


  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/login" element={<LoginWithRedirect />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/header" element={<Header />} />
        <Route
          path="/tracker"
          element={
            <div className="App">
              <Header 
                incomeTotal={incomeTotal}
                expenseTotal={expenseTotal}
                savingsTotal={savingsTotal}
              />
              <div className="main-content">
                <div>
                  <h2>Income</h2>
                  <IncomeForm
                    addIncome={addIncome}
                    editingIncome={editingIncome}
                    updateIncome={updateIncome}
                  />
                  <IncomeList
                    incomes={incomes}
                    onEdit={setEditingIncome}
                    onDelete={deleteIncome}
                  />
                </div>
                <div>
                  <h2>Expense</h2>
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
              </div>
            </div>
          }
        />
        <Route path="/savings" element={<SavingsHeader savingsTotal={savingsTotal} />} />
      </Routes>
    </Router>
  );
}

export default App;