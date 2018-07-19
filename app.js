const express = require('express')
      ,path = require('path')
      ,cookieParser = require('cookie-parser')
      ,bodyParser = require('body-parser')
      ,mongoose = require("mongoose")
      ,jsonwebtoken = require("jsonwebtoken");

const usuario = require('./routes/usuario')
const login = require('./routes/login')

const app = express();

mongoose.connect(
    "mongodb://localhost:27017/api-nodejs-jwt-auth",
    { 
        useNewUrlParser: true
    }
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

//ROUTES
app.use('/api/v1/usuarios', usuario);
app.use('/api/v1/login', login);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;