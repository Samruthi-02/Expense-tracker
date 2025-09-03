const express = require("express");
const router = express.Router();
const Expense = require("../models/Expense");
const jwt = require("jsonwebtoken");

const auth = require("../middlewares/auth");

// GET all expenses for logged-in user
router.get("/", auth, async (req, res) => {
  const expenses = await Expense.find({ userId: req.user.id });
  res.json(expenses);
});

// POST new expense for logged-in user
router.post("/", auth, async (req, res) => {
  const { title, amount } = req.body;
  const newExpense = new Expense({ title, amount, userId: req.user.id });
  await newExpense.save();
  res.json(newExpense);
});

// PUT update expense (only user's own)
router.put("/:id", auth, async (req, res) => {
  const { title, amount } = req.body;
  const updatedExpense = await Expense.findOneAndUpdate(
    { _id: req.params.id, userId: req.user.id },
    { title, amount },
    { new: true }
  );
  res.json(updatedExpense);
});

// DELETE expense (only user's own)
router.delete("/:id", auth, async (req, res) => {
  await Expense.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
  res.json({ message: "Expense deleted" });
});

module.exports = router;
