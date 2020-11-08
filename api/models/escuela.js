const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const escuelaSchema = new Schema({
  nombre: String,
  cue: Number,
});
const Escuela = mongoose.model("Escuela", escuelaSchema);

module.exports = Escuela;
