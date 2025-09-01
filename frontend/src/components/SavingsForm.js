import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        setMsg("✅ Login successful! Redirecting...");
        setTimeout(() => {
          window.location.href = "/dashboard"; // redirect after login
        }, 1000);
      } else {
        setMsg(data.message || "❌ Invalid login");
      }
    } catch (err) {
      setMsg("⚠️ Server error");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Expense Tracker Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
        {msg && <p style={styles.msg}>{msg}</p>}
        <p>
          Don’t have an account?{" "}
          <a href="/signup" style={styles.link}>
            Signup
          </a>
        </p>
      </div>
    </div>
  );
}

// 🎨 Inline CSS Styles
const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(120deg, #89f7fe, #66a6ff)",
  },
  card: {
    width: "350px",
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    border: "1px solid #ddd",
    borderRadius: "8px",
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "#66a6ff",
    border: "none",
    borderRadius: "8px",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
  },
  msg: {
    marginTop: "15px",
    color: "red",
  },
  link: {
    color: "#66a6ff",
    textDecoration: "none",
  },
};
