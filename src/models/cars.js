const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  year: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
//   users: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "user",
//     },
//   ],
});

const Car = mongoose.model("Car", CarSchema);

module.exports = Car;
