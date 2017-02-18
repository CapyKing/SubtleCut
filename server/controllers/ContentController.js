var mongoose = require('mongoose');
var contentSchema = require('../schemas/contentSchema');

var Content = mongoose.model('Content', contentSchema);

module.exports.getContent = function (req, res) {
  Content.find(function (err, content) {
    if (err) return console.log(err);
    res.json(content);
  });
};

module.exports.addContent = function (req, res) {
  var newContent = new Content(req.body);
  newContent.save(function (err, body) {
    if (err) return console.log(err);
    res.json(body);
  });
};
