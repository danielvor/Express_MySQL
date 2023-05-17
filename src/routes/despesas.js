const Despesas = require('../models/despesas_models');
const despesas = require('express').Router();

despesas.get('/despesas/', (req, res) => {
    Despesas.findAll().then((despesas) => {
        res.json(despesas);
    });
}
);

despesas.post('/despesas/', (req, res) => {
    const {descricao, valor} = req.body;
    Despesas.build({descricao: descricao, valor: valor}).save().then(() => {
        res.json({message: "Despesa cadastrada com sucesso!"});
    });
}
);

despesas.put('/despesas/:id', (req, res) => {
    const {descricao, valor} = req.body;
    Despesas.update({descricao: descricao, valor: valor}, {where: {id: req.params.id}}).then(() => {
        res.json({message: "Despesa atualizada com sucesso!"});
    });
}
);

despesas.delete('/despesas/:id', (req, res) => {
    Despesas.destroy({where: {id: req.params.id}}).then(() => {
        res.json({message: "Despesa deletada com sucesso!"});
    });
}
);

module.exports = despesas;