const QuestionDao = require('../daos/question.dao.server')
const answerDao = require('../daos/answer.dao.server')
const AnswerModel = require('../models/answer.model.server')

module.exports = app => {
  createQuestion = (req, res) =>
    QuestionDao.createQuestion(req.body).then(r => res.send(r));

  findAllQuestions = (req, res) =>
    QuestionDao.findAllQuestions().then(r => res.send(r));

  findQuestionById = (req, res) =>
      QuestionDao.findQuestionById(req.params['id']).then(r => res.send(r));

  deleteQuestion = (req, res) =>
      QuestionDao.deleteQuestion(req.params.id).then(r => res.send(r));

  updateQuestion = (req, res) =>
      QuestionDao.updateQuestion(req.params.id, req.body)

  findAnswersByQuestion = (req, res) => {
    AnswerModel.find({question: req.params.qid, student: req.params.sid}).then(r => res.send(r));

  }


 app.post('/api/question', createQuestion);
 app.get('/api/question/:id', findQuestionById);
 app.get('/api/question', findAllQuestions);
 app.delete('/api/question/:id', deleteQuestion);
 app.put('/api/question/:id', updateQuestion);
 app.get('/api/question/:qid/student/:sid/answer', findAnswersByQuestion)
}