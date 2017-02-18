var mongoose = require('mongoose');
var enquirySchema = require('../schemas/enquirySchema');


var Enquiry = mongoose.model('Enquiry', enquirySchema);


module.exports.createEnquiry = function (req, res) {
  var newEnquiry = new Enquiry();
};
