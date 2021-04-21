const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/User");
const passportLocal = require("passport-local").Strategy;

passport.use(
  new passportLocal(function (username, password, done) {
    User.findOne(
      {
        username: username,
      },
      function (err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false);
        }

        if (user.password !== password) {
          if (!user) {
            return done(null, false);
          }
          return done(null, false);
        }

        return done(null, user);
      }
    );
  })
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((id, done) => {
  done(null, user);
});

router.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/login?error=true",
  })
);

router.get("/", (req, res) => {
  const mensaje = {
    mensaje: "",
  };
  if (req.query.error === "true") {
    mensaje.mensaje = "Usuario o contrasela incorrectos";
  }
  res.render("login", mensaje);
});
module.exports = router;
