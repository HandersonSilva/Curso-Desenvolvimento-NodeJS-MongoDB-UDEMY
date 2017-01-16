var mysql = require('mysql');   //criando a conexão com o mysql
var connMysql = function(){//encapsulando a conexão em uma variavel
    console.log('acessando o banco....')
      return mysql.createConnection({
             host:'localhost',
             user:'root',
             password: '12312',
             database:'portal_noticias'
         });
}

module.exports=function(){
    console.log('conexão com o banco criada')
   return connMysql;

}