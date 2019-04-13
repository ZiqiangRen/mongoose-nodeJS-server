const studentModel = require('../models/student.model.server')
const QuestionModel = require('../models/question.model.server')
const AnswerModel = require('../models/answer.model.server')
//const AnswerModel = require('../models/answer.model.server')
const QuizWidgetModel = require('../models/quiz-widget.model.server')

const studentDao = require('./student.dao.server')
const questionDao = require('./question.dao.server')
const answerDao = require('./answer.dao.server')


truncateDatabase = () =>  {
  studentModel.remove({}, function(err) { 
   console.log('studentModel removed') });
  QuestionModel.remove({}, function(err) { 
   console.log('QuestionModel removed') });
  AnswerModel.remove({}, function(err) { 
   console.log('AnswerModel removed') });
  QuizWidgetModel.remove({}, function(err) { 
   console.log('QuizWidgetModel removed') });  
}
  
populateDatabase = () => {
  studentDao.createStudent({_id:123, firstname:"Alice", lastname:"Wonderland", username:"alice", password:"alice", gradYear:2020, scholarship:15000});
  studentDao.createStudent({_id:234, firstname:"Bob", lastname:"Hope", username:"bob", password:"bob", gradYear:2021, scholarship:12000});
  questionDao.createQuestion({
    _id: 321,
    questionType: "trueFalse",
    points: 10,
    question: "Is the following schema valid?",
    trueFalse: {isTrue: false}
  })
  questionDao.createQuestion({
    _id: 432,
    questionType: "trueFalse",
    points: 10,
    question: "DAO stands for Dynamic Access Object.",
      trueFalse: {isTrue: false }
  })

  questionDao.createQuestion({
    _id: 543,
    questionType: "multipleChoice",
    points: 10,
    question: "What does JPA stand for?",
    multipleChoice:   {chices: "Java Persistence API,Java Persisted Application,JavaScript Persistence API,JSON Persistent Associations", correct: 1} 
  })

  questionDao.createQuestion({
    _id: 654,
    questionType: "multipleChoice",
    points: 10,
    question: "What does ORM stand for?",
    multipleChoice:   {chices: "Object Relational Model,Object Relative Markup,Object Reflexive Model,Object Relational Mapping", correct: 4} 
  })

  answerQuestion(123, 321, {_id:123, trueFalseAnswer: true});
  answerQuestion(123, 432, {_id:234, trueFalseAnswer: false});
  answerQuestion(123, 543, {_id:345, multipleChoiceAnswer: 1});
  answerQuestion(123, 654, {_id:456, multipleChoiceAnswer: 2});
  answerQuestion(234, 321, {_id:567, trueFalseAnswer: false});
  answerQuestion(234, 432, {_id:678, trueFalseAnswer: true});
  answerQuestion(234, 543, {_id:789, multipleChoiceAnswer: 3});
  answerQuestion(234, 654, {_id:890, multipleChoiceAnswer: 4});
}




answerQuestion = (studentId, questionId, answer) => {
    answer.student = studentId;
    answer.question = questionId;
    return AnswerModel.create(answer);
};



module.exports = {
  truncateDatabase,
  populateDatabase,
  answerQuestion
}