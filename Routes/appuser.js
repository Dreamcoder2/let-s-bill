const express = require("express");
const router = express.Router();
const usercontroller = require("../Controllers/appuser");

// 01. SAVE THE FIRST TIME USER
router.post("/save", usercontroller.createUser);

module.exports = router;
