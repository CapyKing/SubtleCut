var mongoose = require('mongoose');
var filmSchema = require('../schemas/filmSchema');

var Film = mongoose.model('Film', filmSchema);

module.exports.addFilm = function (req, res) {
  var newFilm = new Film(req.body);
  newFilm.save(function (err, body) {
    if (err) return console.log(err);
    res.json(body);
    body.addedInfo();
  });
};

module.exports.findFilms = function (req, res) {
  Film.find(function (err, films) {
    if (err) return console.log(err);
    res.json(films);
  });
};

module.exports.findFilm = function (req, res) {
  Film.findById(req.params.id, function (err, film) {
    if (err) return console.log(err);
    res.json(film);
  });
};

module.exports.deleteFilm = function (req, res) {
  Film.find({ _id: req.params.id }, function (err, film) {
    if (err) return console.log(err);
  }).remove(function (err, status) {
    if (err) return console.log(err);
    res.json(status);
  });
};

module.exports.editFilm = function (req, res) {
  Film.findById(req.params.id, function (err, film) {
    if (err) return console.log(err);
    film.title = req.body.title;
    film.url = req.body.url;
    film.save(function (err, body) {
      if (err) return console.log(err);
      res.json(body);
      body.updatedInfo();
    });
  });
};
