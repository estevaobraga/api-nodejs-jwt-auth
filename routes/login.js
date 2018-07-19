var  express = require('express')
    ,bodyParser = require('body-parser')
    ,jwt = require('jsonwebtoken') // package jwt 
    ,config = require('../config') // arquivo com chave do token
    ,Usuario = require('../models/usuario')

var router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


//Login, gerar token de acesso
router.post('/', function(req, res) {

  Usuario.findOne({ login: req.body.login }, function (err, user) {
    if (err) return res.status(500).send('Internal server erro');
    if (!user) return res.status(404).send('Usuario nao encontrado');
    
    // Verifica se senha informada esta correta
    var senhaValidada = user.validaSenha(req.body.senha)
    if (!senhaValidada) return res.status(401).send({ auth: false, token: null });

    // Se o usuario existir e a senha estiver valida, o token e gerado
    var token = jwt.sign({ id: user._id, email: user.email }, config.secret, {
      expiresIn: 86400 // validade do token, 24hrs
    });

    // Retorna o token de acesso
    res.status(200).send({ auth: true, token: token });
  });

});

router.get('/logout', function(req, res) {
  res.status(200).send({ auth: false, token: null });
});

module.exports = router;