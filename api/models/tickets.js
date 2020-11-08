const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Ticket = mongoose.model(
  "Ticket",
  new Schema({
    escuela_id: { type: Schema.Types.ObjectId, ref: "Escuela" },
    user_id: { type: Schema.Types.ObjectId, ref: "User" },
    numero_ticket: Number,
    motivo: String,
    estado: String,
    fecha_alta: Date,
    fecha_cierre: Date,
  })
);

module.exports = Ticket;
