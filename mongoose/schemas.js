const mongoose = require("mongoose");

const users = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const tokens = new mongoose.Schema({
  user_id: String,
  token: String,
});

module.exports = { users, tokens };
