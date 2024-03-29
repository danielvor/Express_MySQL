const express = require('express');
const path = require('path');
const Renda = require('../models/rendaModels');

const renda = express.Router();

renda.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/dashboard.html'));
  });

renda.get('/renda/', (req, res) => {
    Renda.findAll().then((rendas) => {
        res.json(rendas);
    });
});

renda.post('/renda/', (req, res) => {
    const {descricao, valor} = req.body;
    Renda.build({descricao: descricao, valor: valor}).save().then(() => {
        res.json({message: "Renda cadastrada com sucesso!"});
    });
});

renda.put('/renda/:id', (req, res) => {
    const {descricao, valor} = req.body;
    Renda.update({descricao: descricao, valor: valor}, {where: {id: req.params.id}}).then(() => {
        res.json({message: "Renda atualizada com sucesso!"});
    });
});

renda.delete('/renda/:id', (req, res) => {
    Renda.destroy({where: {id: req.params.id}}).then(() => {
        res.json({message: "Renda deletada com sucesso!"});
    });
});

module.exports = renda;