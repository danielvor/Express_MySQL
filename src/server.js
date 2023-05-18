const express = require('express');
const routes = require('./routes/rendaRoutes.js');
const despesas = require('./routes/despesasRoutes.js');

const app = express();

app.use(express.static('public'))
app.use(express.json());
app.use(routes);
app.use(despesas);

app.listen(3000, () => {
    console.log("API está conectada na porta 3000")
});


