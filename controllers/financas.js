module.exports = function(app){
  var financasModel = app.models.financas; //está fora do escopo do controller por motivos de ser usado em todos os métodos
  var db = require("../db");

  var financasController = {
    
    adicionar: function(req, res, next) {

      console.log(req.body);
      var financaItem = req.body.item;
      var financaValor = req.body.valor;
      var financaObservacoes = req.body.observacoes;
      var Financas = db.Mongoose.model('financacollection', db.FinancaSchema, 'financacollection');

      var financa = new Financas({ item: financaItem, valor: financaValor, observacoes: financaObservacoes });        
      
      financa.save(function (err) {
          if (err) {
              console.log("Error! " + err.message);
              res.sendStatus(500);
          } else {
              console.log("Post saved");
              res.sendStatus(201);
          }
      });
        
      
    
    },

    listar: function(req, res) {

      
      var Financas = db.Mongoose.model('financacollection', db.FinancaSchema, 'financacollection');
      Financas.find({}).lean().exec(
         function (e, docs) {
            res.json({ "financalist": docs });
      });
    
    },

    alterar: function(req, res) {
      
      var Financas = db.Mongoose.model('financacollection', db.FinancaSchema, 'financacollection');
      Financas.findOneAndUpdate({ _id: req.params.id }, req.body, { upsert: false }, function (err, doc) {
          if (err) {
              res.status(500).json({ error: err.message });
              res.end();
              return;
          }
          res.sendStatus(200);
          res.end();
      });      
    },

    deletar: function(req, res) {
      var Financa = db.Mongoose.model('financacollection', db.FinancaSchema, 'financacollection');
      Financa.find({ _id: req.params.id }).remove(function (err) {
          if (err) {
              res.status(500).json({ error: err.message });
              res.end();
              return;
          }
          res.sendStatus(200);
          res.end();
      });      
    }
    
  }

  return financasController;
};

