module.exports.noticias = function(app, req, res){
        var connection = app.config.dbConnection();//criando a conexão
        var modelNoticias =new app.app.models.NoticiasDAO(connection);
     
        modelNoticias.getNoticias(function(erro,result){//realizar uma consulta e enviar para o browser
              //res.send(result);//passar arquivo json
             res.render("noticias/noticias",{noticia:result});
         });
 	
        console.log('passando os dados do banco por json...');

}

module.exports.noticia= function(app,req,res){
        
          var connection = app.config.dbConnection();//criando a conexã
          var modelNoticia = new app.app.models.NoticiasDAO(connection);//Instanciando o model

          modelNoticia.getNoticia(function(erro,result){//realizar uma consulta e enviar para o browser
                  //res.send(result);//passar arquivo json
                  res.render("noticias/noticia",{noticia:result})//passando o result para a view
                  console.log('chamando a pagina noticia...');
        });


}