module.exports = function(app){
    app.get('/formulario_noticias',function(req,res){
        app.app.controller.admin.formulario_noticias(app,req,res);//chamando a função que renderiza a view
    });

    app.post("/noticia/salvar",function(req,res){//essa view é acionada dentro da view form_add_noticia
         app.app.controller.admin.noticia_salvar(app,req,res);
    });
};