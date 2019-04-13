const mongoose = require('mongoose');
const quizSchema = require('./quiz-widget.schema.server');
var QuizWidgetModel = mongoose.model('questionWidgets', quizSchema);




module.exports = QuizWidgetModel;