const mongoose = require("mongoose");

const savingsSchema = new mongoose.Schema({
  amount: { type: Number, required: true }, // Example: 1000
  note: { type: String }, // Optional description
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  }
});

module.exports = mongoose.model("Savings", savingsSchema);
