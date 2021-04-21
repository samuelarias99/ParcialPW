const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("register");
});

router.post("/", (req, res) => {
  User.create(req.body).then(() => res.render("register"));
});

module.exports = router;
