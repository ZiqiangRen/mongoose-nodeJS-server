const AnswerModel = require('../models/answer.model.server')

createAnswer = user =>
  AnswerModel.create(user)

findAllAnswers = () =>
  AnswerModel.find()

findAnswerById = userId =>
  AnswerModel.findById(userId)

updateAnswer = (uid, user) =>
  AnswerModel
    .update({_id: uid},
      {$set: user})

deleteAnswer = userId =>
  AnswerModel
    .remove({_id: userId})

findAnswersByStudent = studentId =>
  AnswerModel
    .find({student: studentId})

findAnswersByQuestion = questionId =>
  AnswerModel
    .find({question: questionId})



module.exports = {
  createAnswer,
  deleteAnswer,
  findAllAnswers,
  updateAnswer,
  findAnswerById,
  findAnswersByStudent,
  findAnswersByQuestion
}