const express = require("express");
const router = express.Router();
const Expense = require("../models/Expense");
const jwt = require("jsonwebtoken");

// Middleware to verify JWT and set req.userId
function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "No token provided" });
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "mysecretkey");
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
}

// GET all expenses for logged-in user
router.get("/", authMiddleware, async (req, res) => {
  const expenses = await Expense.find({ userId: req.userId });
  res.json(expenses);
});

// POST new expense for logged-in user
router.post("/", authMiddleware, async (req, res) => {
  const { title, amount } = req.body;
  const newExpense = new Expense({ title, amount, userId: req.userId });
  await newExpense.save();
  res.json(newExpense);
});

// PUT update expense (only user's own)
router.put("/:id", authMiddleware, async (req, res) => {
  const { title, amount } = req.body;
  const updatedExpense = await Expense.findOneAndUpdate(
    { _id: req.params.id, userId: req.userId },
    { title, amount },
    { new: true }
  );
  res.json(updatedExpense);
});

// DELETE expense (only user's own)
router.delete("/:id", authMiddleware, async (req, res) => {
  await Expense.findOneAndDelete({ _id: req.params.id, userId: req.userId });
  res.json({ message: "Expense deleted" });
});

module.exports = router;
