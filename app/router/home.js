module.exports = function(app){

    app.get('/',function(req,res){
    app.app.controller.home.home(app,res,res);
})
};