const express = require('express');
const routes = require('./routes/renda.js');
const despesas = require('./routes/despesas.js');

const app = express();

app.use(express.json());
app.use(routes);
app.use(despesas)

app.listen(3000, () => {
    console.log("API está conectada na porta 3000")
});
