const express = require("express");
const controller = require("../controller/products.controller.js");

const router = express.Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);

module.exports = router;

/*
CONTINUAR SEGUINDO O TUTORIAL DO PRISMA PARA FAZER MIGRATION
https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/using-prisma-migrate-node-postgres
*/