const express = require('express');
const app = express();

const port = 3333;
const routes = require('./routes/routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/cars', routes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port} `);
})