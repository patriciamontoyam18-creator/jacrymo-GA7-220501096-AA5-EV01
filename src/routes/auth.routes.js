const express = require("express");
const { register, login } = require("../controllers/auth.controller");

const router = express.Router();

// Endpoint para registrar usuarios.
router.post("/register", register);

// Endpoint para validar credenciales.
router.post("/login", login);

module.exports = router;
