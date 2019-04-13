const mongoose = require('mongoose');
const answerSchema = require('./answer.schema.server');
var AnswerModel = mongoose.model('answers', answerSchema);




module.exports = AnswerModel;
