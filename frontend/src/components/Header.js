import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ incomeTotal = 0, expenseTotal = 0, savingsTotal = 0 }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/tracker"); // redirect to dashboard after login
  };



const handleLogout = () => {
  localStorage.removeItem("token");
  alert("Logout successful ✅");
  navigate("/login");
};


  return (
    <>
      {/* Navbar */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "72px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 40px",
          background: "linear-gradient(135deg, #4f8df5 0%, #3b6bc9 100%)",
          color: "white",
          boxShadow: "0 2px 12px rgba(0,0,0,0.16)",
          zIndex: 1000,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <span
            style={{
              fontSize: "1.8rem",
              fontWeight: "bold",
              letterSpacing: "1.5px",
              marginRight: "40px",
            }}
          >
            <i className="fas fa-wallet" style={{ marginRight: "10px" }}></i>
            EXPENSE TRACKER
          </span>
        </div>

        {/* Auth button */}
        <div style={{ display: "flex", alignItems: "center" }}>
          {isLoggedIn ? (
            <>
              <span style={{ marginRight: "20px", fontSize: "0.9rem" }}>
                <i className="fas fa-user" style={{ marginRight: "8px" }}></i>
                Welcome, User!
              </span>
              <button
                style={{
                  padding: "10px 24px",
                  background: "#fff",
                  color: "#4f8df5",
                  border: "none",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                }}
                onClick={handleLogout}
              >
                <i
                  className="fas fa-sign-out-alt"
                  style={{ marginRight: "8px" }}
                ></i>
                Logout
              </button>
            </>

            
          ) : (
            <button
              style={{
                padding: "10px 24px",
                background: "#fff",
                color: "#4f8df5",
                border: "none",
                borderRadius: "8px",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: "0.9rem",
              }}
              onClick={handleLogin}
            >
              <i
                className="fas fa-sign-in-alt"
                style={{ marginRight: "8px" }}
              ></i>
              Login
            </button>
          )}
        </div>
      </nav>

      {/* Financial Summary */}
      <div
        style={{
          marginTop: "92px",
          padding: "0 20px",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, #4f8df5 0%, #3b6bc9 100%)",
            color: "#fff",
            borderRadius: "16px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
            padding: "20px 40px",
            minWidth: "200px",
            textAlign: "center",
          }}
        >
          <h3>Total Income</h3>
          <p>₹{incomeTotal}</p>
        </div>
        <div
          style={{
            background: "linear-gradient(135deg, #ff6a6a 0%, #e64545 100%)",
            color: "#fff",
            borderRadius: "16px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
            padding: "20px 40px",
            minWidth: "200px",
            textAlign: "center",
          }}
        >
          <h3>Total Expense</h3>
          <p>₹{expenseTotal}</p>
        </div>
        <div
          style={{
            background: "linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)",
            color: "#fff",
            borderRadius: "16px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
            padding: "20px 40px",
            minWidth: "200px",
            textAlign: "center",
          }}
        >
          <h3>Savings</h3>
          <p>₹{savingsTotal}</p>
        </div>
      </div>
    </>
  );
};

export default Header;
