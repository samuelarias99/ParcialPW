const express = require("express");
const cors = require("cors");
const passport = require("passport");
const login = require("./routes/login");
const register = require("./routes/register");
const connection = require("./database");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

app.set("views", "./api/views");
app.set("view engine", "pug");

app.use("/login", login);
app.use("/register", register);

app.get("/home", (req, res) => {
  res.send("Conexion exitosa");
});

app.listen(3000, (req, res) => {});
