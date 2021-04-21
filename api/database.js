const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/loginParcial";

const connection = mongoose.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, con) => {
    if (err) {
      console.log(err);
    }
    console.log("Conexion exitosa");
  }
);

module.exports = connection;
