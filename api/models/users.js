const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = mongoose.model(
  "User",
  new Schema({
    nombre: String,
    cue: Integer,
  })
);

module.exports = Usuario;
