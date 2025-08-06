const express = require("express");
const router = express.Router();
const Expense = require("../models/Expense");

// GET all expenses
router.get("/", async (req, res) => {
  const expenses = await Expense.find();
  res.json(expenses);
});

// POST new expense
router.post("/", async (req, res) => {
  const { title, amount } = req.body;
  const newExpense = new Expense({ title, amount });
  await newExpense.save();
  res.json(newExpense);
});

// PUT update expense
router.put("/:id", async (req, res) => {
  const { title, amount } = req.body;
  const updatedExpense = await Expense.findByIdAndUpdate(
    req.params.id,
    { title, amount },
    { new: true }
  );
  res.json(updatedExpense);
});

// DELETE expense
router.delete("/:id", async (req, res) => {
  await Expense.findByIdAndDelete(req.params.id);
  res.json({ message: "Expense deleted" });
});

module.exports = router;
