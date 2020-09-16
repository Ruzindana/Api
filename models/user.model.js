const mongoose = require("mongoose");
const userSchema = mongoose.Schema;

module.exports.User = new userSchema({
  username: {
    type: String,
    required: true,
    max: 10,
    min: 4,
  },
  password: {
    type: String,
    required: true,
  },
});
