var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var enquirySchema = new Schema({
  enquiryBody: String,
  meetingRequired: Boolean,
  deadline: Date,
  enquiryID: Number,
  clientID: String
});
