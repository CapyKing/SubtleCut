var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contentSchema = new Schema({
  aboutTitle: String,
  aboutContent: String
});

module.exports = contentSchema;
