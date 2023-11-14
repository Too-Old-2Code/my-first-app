const express = require("express");
const router = express.Router();
const { userLogin, userRegister } = require("../controllers/user-controllers");

router.post("/login", userLogin);

router.post("/register", userRegister);

module.exports = router;
