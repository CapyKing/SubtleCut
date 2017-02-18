var mongoose = require('mongoose');
var clientSchema = require('../schemas/clientSchema');

var Client = mongoose.model('Client', clientSchema);

module.exports.findClient = function (req, res) {
  Client.find(function (err, clients) {
    if (err) return console.log(err);
    res.json(clients);
  });
};

module.exports.addClient = function (req, res) {
  var newClient = new Client(req.body);
  newClient.save(function (err, body) {
    if (err) return console.log(err);
    res.json(body);
  });
};

module.exports.deleteClient = function (req, res) {
  Client.find({ _id: req.params.id }, function (err, client) {
    if (err) return console.log(err);
  }).remove(function (err, status) {
    if (err) return console.log(err);
    res.json(status);
  });
};
