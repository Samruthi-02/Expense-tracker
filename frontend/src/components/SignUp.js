import React, { useState } from "react";

import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (res.ok) {
        alert("Registration successful! Please login.");
        window.location.href = "/login";
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (err) {
      alert("Server error");
    }
  };

  return (
    <>
      {/* Inline CSS for Signup */}
      <style>{`
        body {
          margin: 0;
          padding: 0;
          font-family: "Poppins", sans-serif;
          background: linear-gradient(-45deg, #1d2671, #c33764, #667db6, #0082c8);
          background-size: 400% 400%;
          animation: gradientBG 15s ease infinite;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        @keyframes gradientBG {
          0% {background-position: 0% 50%;}
          50% {background-position: 100% 50%;}
          100% {background-position: 0% 50%;}
        }

        .signup-card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          padding: 40px 50px;
          border-radius: 20px;
          box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.3);
          text-align: center;
          width: 380px;
          color: white;
          animation: fadeIn 1s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .signup-title {
          margin-bottom: 25px;
          font-size: 28px;
          font-weight: bold;
          color: #fff;
          letter-spacing: 1px;
        }

        .signup-card input {
          width: 100%;
          padding: 14px;
          margin: 12px 0;
          border: none;
          border-radius: 10px;
          font-size: 15px;
          outline: none;
          background: rgba(255, 255, 255, 0.2);
          color: #fff;
          transition: 0.3s ease;
        }

        .signup-card input::placeholder {
          color: #ddd;
        }

        .signup-card input:focus {
          background: rgba(255, 255, 255, 0.3);
          box-shadow: 0 0 10px #00c6ff, 0 0 20px #0072ff;
        }

        .signup-card button {
          width: 100%;
          padding: 14px;
          margin-top: 15px;
          background: linear-gradient(90deg, #00c6ff, #0072ff);
          color: white;
          font-size: 16px;
          font-weight: bold;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
        }

        .signup-card button:hover {
          background: linear-gradient(90deg, #0072ff, #00c6ff);
          transform: scale(1.05);
          box-shadow: 0px 6px 15px rgba(0, 114, 255, 0.5);
        }

        .login-text {
          margin-top: 20px;
          font-size: 14px;
          color: #f1f1f1;
        }

        .login-text a {
          color: #00c6ff;
          text-decoration: none;
          font-weight: bold;
        }

        .login-text a:hover {
          text-decoration: underline;
        }
      `}</style>

      {/* Signup Form */}
      <div className="signup-card">
        <h2 className="signup-title">Create Account ✨</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
        <p className="login-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </>
  );
};




export default Signup;
