//implementando uma classe em JS
function NoticiasDAO(connection){
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback){
         this._connection.query('select *from noticia',callback);

    };
NoticiasDAO.prototype.getNoticia = function(callback){
        this._connection.query('select *from noticia where id_noticia = 3',callback);

    };
NoticiasDAO.prototype.salvarNoticia =function(noticia,callback){
        this._connection.query('insert into noticia set ?',noticia,callback);//set ja salvar o json direto no banco de dado
    };


module.exports =function(){

   
return NoticiasDAO;
}