var  jwt = require('jsonwebtoken') // package jwt
    ,config = require('../config') // carrega arquivo de configuração com chave do token

function checarToken(req, res, next) {

  // Verifica parametros no cabeçalho ,url ou post por token 
  var token = req.headers['x-access-token'];
  if (!token) 
    return res.status(403).send({ auth: false, message: 'Informe um token' });

  // Verifica a chave e validade do token
  jwt.verify(token, config.secret, function(err, decoded) {      
    if (err) 
      return res.status(500).send({ auth: false, message: 'Falha ao autenticar o token' });    

    // Se tudo estiver ok, salva o id do usuario para usar em outras rotas e prossegue
    req.userId = decoded.id;
    next();
  });

}

module.exports = checarToken;