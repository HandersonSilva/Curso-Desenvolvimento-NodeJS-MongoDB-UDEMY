//USANDO O FRAMEWORK EXPRESS
//CRIANDO OSERVER COM O EXPRESS
var express = require('express');//criar a função do servidor
var consign =require('consign');//adcionando o consign
var bodyParser = require('body-parser');//adcionando o body-parser
var expressValidator = require('express-validator');

var app = express();

app.set('view engine','ejs');//mudando o engine de wiew para o EJS
app.set('views','./app/views');//setar aonde estar as views 

//incluir o body-parser
app.use(bodyParser.urlencoded({extended:true}));//middleware
app.use(expressValidator());
app.use(express.static('./app/public'));//adciona arquivos static


consign()
    .include('app/router')//setar o caminho da routes 
    .then('config/dbConnection.js')//adicionando a conexão mysql ao consign
    .then('app/models')//adcionando os models ao autoload
    .then('app/controller')//adicionando os controllers
    .into(app);//colocar no server
module.exports= app;//exportando 


