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
  const escuela = new Escuela({
    nombre: req.body.nombre,
    cue: req.body.cue,
  });
  //Escuela.create(req.body).then((x) => res.status(201).send(x));
  escuela
    .save()
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Note.",
      });
    });
});

router.put("/:id", (req, res) => {
  Escuela.findByIdAndUpdate(req.params.id, req.body).then(() =>
    res.sendStatus(204)
  );
});

module.exports = router;
