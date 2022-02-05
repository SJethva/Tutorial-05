var mongoose = require('mongoose');

var schema = mongoose.Schema({
    name:String,
    password:Number
})

module.exports = mongoose.model("computers",schema)