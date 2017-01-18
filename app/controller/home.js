module.exports.home=function(app,req,res){

        var connection = app.config.dbConnection();
        var noticiasModels= new app.app.models.NoticiasDAO(connection);

        noticiasModels.get5UltimasNoticias( function(erro,result){
                console.log(result);
                res.render("home/index",{noticias:result});
        }); 

}