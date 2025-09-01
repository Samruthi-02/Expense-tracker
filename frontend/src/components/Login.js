import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Hardcoded example, replace with API call
    if (email === "test@gmail.com" && password === "12345") {
      const token = "dummy-token"; // Replace with real JWT from backend
      localStorage.setItem("token", token);

      if (onLogin) onLogin({ token });
      navigate("/tracker");
    } else {
      alert("Invalid email or password ❌");
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "14px",
    margin: "12px 0",
    border: "none",
    borderRadius: "10px",
    fontSize: "15px",
    outline: "none",
    background: "rgba(255,255,255,0.2)",
    color: "#fff",
  };

  const buttonStyle = {
    width: "100%",
    padding: "14px",
    marginTop: "15px",
    background: "linear-gradient(90deg, #00c6ff, #0072ff)",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(-45deg, #1d2671, #c33764, #667db6, #0082c8)",
        backgroundSize: "400% 400%",
        animation: "gradientBG 15s ease infinite",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(10px)",
          padding: "40px 50px",
          borderRadius: "20px",
          boxShadow: "0px 8px 32px rgba(0,0,0,0.3)",
          color: "white",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "25px" }}>Login 🔑</h2>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Login</button>
        <p style={{ marginTop: "20px", fontSize: "14px", color: "#f1f1f1" }}>
          Don’t have an account? <Link to="/signup" style={{ color: "#00c6ff", fontWeight: "bold" }}>Sign Up</Link>
        </p>
      </form>

      <style>{`
        @keyframes gradientBG {
          0% {background-position: 0% 50%;}
          50% {background-position: 100% 50%;}
          100% {background-position: 0% 50%;}
        }
      `}</style>
    </div>
  );
};

export default Login;
