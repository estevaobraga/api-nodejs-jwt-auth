# Api Rest Node.js, MongoDB e Autenticação JWT

## Descrição
Exemplo de Api Rest Node.js com autenticação JWT e controle de segurança nas rotas

Rota: Express

ODM: Mongoose

Autenticação: JWT

## Instalação
#### Download do código
`git clone https://github.com/estevaobraga/api-nodejs-jwt-auth.git`  

#### Instalar pacotes mongo
`npm install`

#### Iniciar base mongo local ou container docker
##### base local:
`mongod`

##### docker:
baixe a imagem mongo:

`docker pull mongo`
Inicie um container:

`docker run --name mongodocker -p 27017:27017 -d mongo`

## Testando
Use [postman](https://www.getpostman.com/apps) para realizar as chamadas a API

#### Criar usuário 
Método POST na rota /api/v1/usuarios/ sem verificação de token
passando os parâmetros: nome, login, senha e email no corpo da requisição

![inserir usuários ](https://github.com/estevaobraga/img-wikis/blob/master/api-nodejs-jwt-auth/node-jwt-teste-1.png)

#### Logando
Método POST na rota /api/v1/login/
passando os parâmetros: login e senha no corpo da requisição

![logando](https://github.com/estevaobraga/img-wikis/blob/master/api-nodejs-jwt-auth/node-jwt-teste-2.png)

#### Acessando rota com JWT
Método GET na rota /api/v1/usuarios com verificação de token
Informe token no cabeçalho da requisição com a chave: 'x-access-token' e valor informar o token recebido no login

![](https://github.com/estevaobraga/img-wikis/blob/master/api-nodejs-jwt-auth/node-jwt-teste-4.png)

![](https://github.com/estevaobraga/img-wikis/blob/master/api-nodejs-jwt-auth/node-jwt-teste-5.png)
