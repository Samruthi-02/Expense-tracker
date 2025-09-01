const express = require("express");
const router = express.Router();
const Savings = require("../models/Savings");
const authMiddleware = require("../middlewares/auth");

// GET all savings for logged-in user
router.get("/", authMiddleware, async (req, res) => {
  const savings = await Savings.find({ userId: req.userId });
  res.json(savings);
});

// POST new savings
router.post("/", authMiddleware, async (req, res) => {
  const { amount, note } = req.body;
  const newSavings = new Savings({ amount, note, userId: req.userId });
  await newSavings.save();
  res.json(newSavings);
});

// PUT update savings (only user's own)
router.put("/:id", authMiddleware, async (req, res) => {
  const { amount, note } = req.body;
  const updatedSavings = await Savings.findOneAndUpdate(
    { _id: req.params.id, userId: req.userId },
    { amount, note },
    { new: true }
  );
  res.json(updatedSavings);
});

// DELETE savings (only user's own)
router.delete("/:id", authMiddleware, async (req, res) => {
  await Savings.findOneAndDelete({ _id: req.params.id, userId: req.userId });
  res.json({ message: "Savings deleted" });
});

module.exports = router;
