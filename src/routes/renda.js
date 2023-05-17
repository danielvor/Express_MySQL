const Renda = require('../models/renda_models');
const renda = require('express').Router();

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