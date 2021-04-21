const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/User");
const passportLocal = require("passport-local").Strategy;

passport.use(
  new passportLocal(function (username, password, done) {
    User.findOne({
      username: username,
    })
      .exec()
      .then((user) => {
        if (user.username === username && user.password === password) {
          return done(null, user);
        }

        done(null, false);
      });
  })
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((id, done) => {
  done(null, user);
});

router.get("/", (req, res) => {
  res.render("login");
});

router.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/login",
  })
);

module.exports = router;
