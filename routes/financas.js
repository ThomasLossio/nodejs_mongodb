module.exports = function(app) {
  var financasController = app.controllers.financas;

  app.get("/financas", function(req, res) {
  
    res.json({message: "Funcionando!", id: parseInt(req.query.id), teste: true});
    
  });

  app.post("/financas/adicionar", financasController.adicionar);

  app.get("/financas/listar", financasController.listar);

  app.put("/financas/alterar/:id", financasController.alterar);

  app.delete("/financas/deletar/:id", financasController.deletar);
}