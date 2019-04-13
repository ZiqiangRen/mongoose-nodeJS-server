const QuestionModel = require('../models/question.model.server')

createQuestion = user =>
  QuestionModel.create(user)

findAllQuestions = () =>
  QuestionModel.find()

findQuestionById = userId =>
  QuestionModel.findById(userId)

updateQuestion = (uid, user) =>
  QuestionModel
    .update({_id: uid},
      {$set: user})

deleteQuestion = userId =>
  QuestionModel
    .remove({_id: userId})


module.exports = {
  createQuestion,
  deleteQuestion,
  findAllQuestions,
  updateQuestion,
  findQuestionById
}

