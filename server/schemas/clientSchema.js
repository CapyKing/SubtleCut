var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clientSchema = new Schema({
  name: String,
  email: String,
  company: String,
});

module.exports = clientSchema;
