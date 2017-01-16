module.exports.formulario_noticias = function(app,req,res){
         res.render("admin/form_add_noticia",{validar:{},noticia:{}});//setar a pagina com o view do ejs
         console.log('Chamando pagina formulario...');

}

module.exports.noticia_salvar = function(app,req,res){
         var novaNoticia = req.body;
      //  res.send(novaNoticia);//enviar so o json

         //validação dos campos com express-validator
         req.assert('titulo','Titulo é obrigatorio').notEmpty();//.notEmpty() indica que o campo não pode ser vazio
         req.assert('autor','Autor é obrigatorio').notEmpty();
         req.assert('resumo','Resumo é obrigatorio').notEmpty();
         req.assert('resumo','Resumo deve conter entre 5 a 10 caracteres').len(5,10);//len() limeta o tamanho do campo
         req.assert('data_noticia','Data é obrigatorio').notEmpty();
         req.assert('data_noticia','Formato da Data Incorreto').isDate({format:'YYYY-MM-DO'});
         req.assert('noticia','Noticia é obrigatorio').notEmpty();
         //pegar os erros
             var erros = req.validationErrors();
             if(erros){
                   res.render("admin/form_add_noticia",{validar:erros,noticia:novaNoticia});
                     return;
              }
        var connection = app.config.dbConnection();//criando a conexã
        var modelNoticia = new app.app.models.NoticiasDAO(connection);//Instanciando o model

        modelNoticia.salvarNoticia(novaNoticia,function(erro,result){
              console.log(result);
              //quando o metodo for post usa-se a função direct(); para setar uma nova view
              res.redirect('/noticias');
        });

}