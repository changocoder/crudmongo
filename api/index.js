const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const escuelas = require("./routes/escuela.route");
const tickets = require("./routes/tickets");

app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
  userNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api/escuela", escuelas);
app.use("/api/ticket", tickets);

module.exports = app;
// listen for requests
//app.listen(3000, () => {
//console.log("Server is listening on port 3000");
//});
