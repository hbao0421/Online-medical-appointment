const express = require("express");
const router = express.Router();
const doctorController = require("../Controllers/Doctor-controller");

router.post("/addDoctor",doctorController.addDoctor);

module.exports = router;