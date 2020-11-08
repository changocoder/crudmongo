const app = require("express");
const router = app.Router();
const Escuela = require("../models/escuela");

router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});

router.get("/", (req, res) => {
  Escuela.find()
    .exec()
    .then((x) => res.status(200).send(x));
});

router.get("/:id", (req, res) => {
  Escuela.findById(req.params.id)
    .exec()
    .then((x) => res.status(200).send(x));
});

router.post("/", (req, res) => {
  Escuela.create(req.body).then((x) => res.status(201).send(x));
});

router.put("/:id", (req, res) => {
  Escuela.findOneAndUpdate(req.params.id, req.body).then(() =>
    res.sendStatus(204)
  );
});

router.put("/:id", (req, res) => {
  Escuela.findOneAndDelete(req.params.id, req.body).then(() =>
    res.sendStatus(204)
  );
});

module.exports = router;
