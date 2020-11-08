const express = require("express");
const mongoose = require("mongoose");
const bodyParse = require("body-parser");
const cors = require("cors");

const escuelas = require("./routes/escuela");
const tickets = require("./routes/tickets");

app = express();
app.use(bodyParse.json());
app.use(cors());
const uri =
  "mongodb+srv://stocklr:factorae@cluster0.o4tuk.mongodb.net/test?retryWrites=true&w=majority;";
mongoose.connect(uri, {
  userNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api/escuela", escuelas);
app.use("/api/ticket", tickets);
module.exports = app;
