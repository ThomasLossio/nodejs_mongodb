module.exports = function(app){
  var financasModel = app.models.financas; //está fora do escopo do controller por motivos de ser usado em todos os métodos

  var financasController = {
      adicionar: function(req, res) {
      
        res.send("Funcionou o adicionar!");
      
      },

      listar: function(req, res) {

        res.send("Funcionou o listar!");
      
      }
    
  }

  return financasController;
};

