const mongoose = require('mongoose')

var usuarios = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nome: String,
    login: String,
    senha: String,
    email: String
});

usuarios.methods.validaSenha = function(senha) {
  return senha == this.senha
};

module.exports = mongoose.model('usuario', usuarios)