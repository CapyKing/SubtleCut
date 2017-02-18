var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

// Controllers
var filmController = require('./controllers/FilmController.js');
var clientController = require('./controllers/ClientController.js');
var enquiryController = require('./controllers/EnquiryController.js');
var contentController = require('./controllers/ContentController.js');

// App
var app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('../client'));
app.use(express.static('../admin'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// MongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/subtle-cut');

// API CALLS

// GET requests
app.get('/api/film', filmController.findFilms);
app.get('/api/film/:id', filmController.findFilm);
app.get('/api/client', clientController.findClient);
app.get('/api/content', contentController.getContent);

// POST requests
app.post('/api/film', filmController.addFilm);
app.post('/api/enquiry', enquiryController.createEnquiry);
app.post('/api/client', clientController.addClient);
app.post('/api/content', contentController.addContent);

// DELETE requests
app.delete('/api/film/:id', filmController.deleteFilm);
app.delete('/api/client/:id', clientController.deleteClient);

// PUT requests
app.put('/api/film/:id', filmController.editFilm);

// Send client TEMPORARY
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../client', 'index.html'));
});

app.get('/films', function (req, res) {
  res.sendFile(path.join(__dirname, '../client', 'films.html'));
});

app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname, '../client', 'about.html'));
});

app.get('/contact', function (req, res) {
  res.sendFile(path.join(__dirname, '../client', 'contact.html'));
});

// Send admin
app.get('/b9WHv4S0urTKARSa2qJs', function (req, res) {
  res.sendFile(path.join(__dirname, '../admin', 'index.html'));
});


// Start server
app.listen(3000);
