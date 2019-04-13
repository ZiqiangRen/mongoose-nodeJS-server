var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


require('./db')();

const studentModel = require('./models/student.model.server')
const QuestionModel = require('./models/question.model.server')
const AnswerModel = require('./models/answer.model.server')
const QuizWidgetModel = require('./models/quiz-widget.model.server')

const studentDao = require('./daos/student.dao.server')
const questionDao = require('./daos/question.dao.server')
const answerDao = require('./daos/answer.dao.server')
const universityDao = require('./daos/university.dao.server')


const questionApp = require('./services/question.service.server')
const studentApp = require('./services/student.service.server')
const universityApp = require('./services/university.service.server')

//universityDao.truncateDatabase();
//universityDao.populateDatabase();

AnswerModel.find().then(users =>console.log(users))
studentModel.find().then(users =>console.log(users))
QuestionModel.find().then(users =>console.log(users))


questionApp(app);
studentApp(app);
universityApp(app);



app.listen(3000);