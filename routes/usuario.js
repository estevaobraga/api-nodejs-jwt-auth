const express = require('express')
      ,mongoose = require('mongoose')
      ,usuarios = require('../models/usuario')
      ,VerificarToken = require('../models/VerificaToken');

const router = express.Router();

/*
* Ver todos os usuarios.
*
* Adicione "VerificarToken" para 
* restrigir esta rota somente p/
* usuarios logados
*/
router.get("/", VerificarToken, (req, res, next) => {

  usuarios.find()
    .exec()
    .then(docs => {
      res.status(200).json(docs);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

//Cadastrar novo usuario
router.post("/", (req, res, next) => {
  const novapessoa = new usuarios({
    _id: new mongoose.Types.ObjectId(),
    nome: req.body.nome,
    login: req.body.login,
    senha: req.body.senha,
    email: req.body.email
  });
  
  novapessoa
    .save()
    .then(result => {
      res.status(201).json({
        createdProduct: result
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;