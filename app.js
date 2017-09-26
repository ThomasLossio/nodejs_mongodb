/* var MongoClient = require('mongodb').MongoClient;

var servidor = 'mongodb://localhost:27017/NodeFinancas';

MongoClient.connect(servidor, function(erro, db){
    if(erro){
        console.log("Erro ao estabelecer conexão " + erro);
    } else {
        console.log("Conexão estabelecida com sucesso!");
    }

     var topico = {
        titulo : "Erro na compilação",
        conteudo : "Não consigo compilar meu projeto",
        tags : ["Java", "Android", "Mobile"]
    };

    var colecao = db.collection("topicos");

    colecao.insertOne(topico, function(erro, resultado){
        if(erro){
            console.log("Erro ao inserir documento: " + erro);
        } else {
            console.log("Documento inserido com sucesso!");
        }
    }); 

    var usuarios = [
        { login : "thomas", senha : "123"},
        { login : "vinicius", senha : "456"},
        { login : "hallef", senha : "789"}        
    ]

    var colecao = db.collection("usuarios");

    colecao.insertMany(usuarios, function(erro, resultado) {
        if(erro){
            console.log("Erro ao inserir os documentos: " + erro);
        } else {
            console.log(resultado.insertedCount + " documentos inseridos com sucesso!");
        }
    }) 

     var usuario = {
        login : "maria",
        senha : "123456789"
    };

    var colecao = db.collection("usuarios");

    var filtro = { login : "maria"};

    colecao.updateOne(filtro, usuario, function(erro, resultado){
        if(erro)
            console.log("Erro ao atualizar documento: " + erro);
        else
            console.log("Documento atualizado com sucesso!");
    });
     

     var colecao = db.collection("usuarios");

    var filtro = { };

    var alteracao = { $set : { ativo : true } };

    colecao.updateMany(filtro, alteracao, function(erro, resultado){
        if(erro)
            console.log("Erro ao atualizar documentos: " + erro);
        else
            console.log("Documentos atualizados com sucesso!");
    }); 

     var colecao = db.collection("usuarios");

    var filtro = { login : "joel"};

    colecao.deleteOne(filtro, function(erro, resultado){
        if(erro)
            console.log("Erro ao remover documento: " + erro);
        else
            console.log("Documento removido com sucesso!");
    });     

     var colecao = db.collection("usuarios");
    
    var filtro = { ativo : true };

    colecao.deleteMany(filtro, function(erro, resultado){
        if(erro)
            console.log("Erro ao remover documentos: " + erro);
        else
            console.log(resultado.deletedCount + " Documentos removidos com sucesso!");
    });    
    
     var colecao = db.collection("topicos");
    
    var filtro = { };

    colecao.find(filtro).toArray(function(erro, documentos){
        console.log(documentos);
    });  

    var colecao = db.collection("topicos");
    
    var filtro = { };

    colecao.find(filtro).toArray(function(erro, documentos){
        documentos.forEach(function(doc) {
            console.log("ID: " + doc._id);
            console.log("Título: " + doc.titulo);
            console.log("Conteúdo: " + doc.conteudo);
            console.log("Tags: " + doc.tags);
            console.log("...");
        }, this);        
    });       

    db.close;
}); */


var express = require('express');
var app = express();

app.get("/user", function(req, res) {
    res.send("hello world! " + req.query.id + " e " + req.query.nome);
});

app.listen(3000);


