var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/nodetest1', {
    useMongoClient: true
});

var financaSchema = new mongoose.Schema({
    item: String,
    valor: Number,
    observacoes: String
    //data de criação, 
}, { collection: 'financacollection' }
);

module.exports = { Mongoose: mongoose, FinancaSchema: financaSchema }

