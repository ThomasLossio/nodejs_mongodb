module.exports = function(app){
  var financasModel = app.models.financas; //está fora do escopo do controller por motivos de ser usado em todos os métodos
  var db = require("../db");

  var financasController = {
    
    adicionar: function(req, res, next) {

      console.log(req.body);
      var financaItem = req.body.item;
      var financaValor = req.body.valor;
      var financaObservacoes = req.body.observacoes
  
      var Financas = db.Mongoose.model('financacollection', db.FinancaSchema, 'financacollection');
      if (financaItem != '' && financaValor != '' && financaObservacoes != '') {
        var financa = new Financas({ item: financaItem, valor: financaValor, observacoes: financaObservacoes });        
      }
      financa.save(function (err) {
          if (err) {
              console.log("Error! " + err.message);
              res.sendStatus(500);
          }
          else {
              console.log("Post saved");
              res.sendStatus(200);
          }
      });      
    
    },

    listar: function(req, res) {

      
      var Financas = db.Mongoose.model('financacollection', db.FinancaSchema, 'financacollection');
      Financas.find({}).lean().exec(
         function (e, docs) {
            res.json({ "financalist": docs });
      });
    
    }
    
  }

  return financasController;
};

