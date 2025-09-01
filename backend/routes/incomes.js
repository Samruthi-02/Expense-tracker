const express = require("express");
const router = express.Router();
const Income = require("../models/Income");
const auth = require("../middlewares/auth");

// ✅ Get incomes
router.get("/", auth, async (req, res) => {
  try {
    const incomes = await Income.find({ userId: req.user.id });
    res.json(incomes);
  } catch (err) {
    console.error("Get incomes error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Add income
router.post("/", auth, async (req, res) => {
  try {
    const { amount, source } = req.body;

    if (!amount || !source) {
      return res.status(400).json({ message: "Amount and source required" });
    }

    const newIncome = new Income({
      amount,
      source,
      userId: req.user.id,
    });

    await newIncome.save();
    res.json(newIncome);
  } catch (err) {
    console.error("Add income error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
