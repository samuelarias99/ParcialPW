const mongoose = require("mongoose");
const { Schema } = mongoose;

const User = mongoose.model(
  "User",
  new Schema({
    nombre: String,
    apellido: String,
    dni: String,
    username: String,
    email: String,
    password: String,
  })
);

module.exports = User;
