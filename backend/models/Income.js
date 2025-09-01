const mongoose = require("mongoose");

const incomeSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  source: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Income", incomeSchema);
