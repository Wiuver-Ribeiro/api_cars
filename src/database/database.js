const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://127.0.0.1:27017/cars")
  .then(() => {
    console.log("Conectado com sucesso! ✅");
  })
  .catch((error) => {
    console.log("Erro ao conectar! ⚠️" + error);
  });


module.exports = mongoose;
