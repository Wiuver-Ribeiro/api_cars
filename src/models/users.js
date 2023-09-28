const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  token: {
    type: String,
  },
  username: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  avatar: {
    type: String,
  },
  cars: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "car",
    },
  ],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
