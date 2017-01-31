//implementando uma classe em JS
function NoticiasDAO(connection){
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback){
         this._connection.query('select *from noticia order by data_criacao desc',callback);

    };
NoticiasDAO.prototype.getNoticia = function(id_noticia,callback){
    console.log(id_noticia.id_noticia);
        this._connection.query('select *from noticia where id_noticia ='+id_noticia.id_noticia,callback);

    };
NoticiasDAO.prototype.salvarNoticia =function(noticia,callback){
        this._connection.query('insert into noticia set ?',noticia,callback);//set ja salvar o json direto no banco de dado
    };
NoticiasDAO.prototype.get5UltimasNoticias = function(callback){
        this._connection.query("select *from noticia order by data_criacao desc limit 5",callback)//comando sql ordenar por data de criação retornar as 5 primeiras
}

module.exports =function(){

   
return NoticiasDAO;
}