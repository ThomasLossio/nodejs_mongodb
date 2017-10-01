module.exports = function(app) {
  var financasModel = app.controllers.financas;

  app.get("/financas", function(req, res) {
  
    res.json({message: "Funcionando!", id: parseInt(req.query.id), teste: true});
    
  });

  app.post("/financas/adicionar", financasModel.adicionar);

  app.get("/financas/listar", financasModel.listar);
}