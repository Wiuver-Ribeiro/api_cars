const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("./database/database");

const port = 3333;
const routes = require("./routes/routes");

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port} `);
});
