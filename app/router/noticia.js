module.exports = function(app){

    app.get('/noticia',function(req,res){
        app.app.controller.noticias.noticia(app,req,res);
    });

    app.get('/noticias',function(req,res){  
        app.app.controller.noticias.noticias(app,req,res);
   });


};
