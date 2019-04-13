const mongoose = require('mongoose');
const questionSchema = require('./question.schema.server');
var QuestionModel = mongoose.model('questions', questionSchema);




module.exports = QuestionModel;