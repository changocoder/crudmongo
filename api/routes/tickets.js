const app = require("express");
const router = app.Router();
const Ticket = require("../models/tickets");

router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});

router.get("/:id", (req, res) => {
  Ticketv.findById(req.params.id)
    .exec()
    .then((x) => res.status(200).send(x));
});

router.post("/", (req, res) => {
  Ticket.create(req.body).then((x) => res.status(201).send(x));
});

router.put("/:id", (req, res) => {
  Ticket.findById(req.params.id, req.body).then(() => res.sendStatus(204));
});

router.put("/:id", (req, res) => {
  Ticket.findById(req.params.id, req.body).then(() => res.sendStatus(204));
});

module.exports = router;
