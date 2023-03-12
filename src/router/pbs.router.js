const express = require("express");
const controller = require("../controller/pbs.controller.js");

const router = express.Router();

router.get("/", controller.getAll);

module.exports = router;
