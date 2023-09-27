const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/cars", { useMongoClient: true })
  .then(() => {
    console.log("Conectado com sucesso!");
  })
  .catch((error) => {
    console.log("Erro ao conectar! " + error);
  });


module.exports = mongoose;
