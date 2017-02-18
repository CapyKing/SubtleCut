var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var filmSchema = new Schema({
  title: String,
  url: String,
  added: {
    type: Date,
    default: Date.now
  }
});

filmSchema.methods.addedInfo = function () {
  var information = [
    this.title ? "Title: " + "\"" + this.title + "\" " : "No title provided! ",
    this.url ? "URL: " + this.url : "No URL provided!"
  ];
  console.log("Film added to database: " + information[0] + information[1]);
};

filmSchema.methods.updatedInfo = function () {
  var information = [
    this.title ? "Title: " + "\"" + this.title + "\" " : "No new title provided! ",
    this.url ? "URL: " + this.url : "No new URL provided!"
  ];
  console.log("Film updated: " + information[0] + information[1]);
};

module.exports = filmSchema;
