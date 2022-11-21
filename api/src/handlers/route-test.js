const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.send("Hola Cruz. Te estaba esperando");
});

module.exports = router;
