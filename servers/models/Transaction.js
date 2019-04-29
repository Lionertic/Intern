const mongoose = require('mongoose');

const TransactionSchema = mongoose.Schema({
    From:String,
    To:String,
    Credit:Number,
    Date:Date
});

const Transaction = module.exports = mongoose.model('Transaction',TransactionSchema);