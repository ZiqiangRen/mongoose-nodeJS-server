const studentDao = require('../daos/student.dao.server')
const universityDao = require('../daos/university.dao.server')
const answerDao = require('../daos/answer.dao.server')
const AnswerModel = require('../models/answer.model.server')

module.exports = app => {
  createStudent = (req, res) =>
    res.json(studentDao.createStudent(req.body))

  findAllStudents = (req, res) =>
    studentDao.findAllStudents().then(r => res.send(r));

  findStudentById = (req, res) =>
      studentDao.findStudentById(req.params['id']).then(r => res.send(r));


  deleteStudent = (req, res) =>
      studentDao.deleteStudent(req.params.id).then(r => res.send(r));

  updateStudent = (req, res) =>
      studentDao.updateStudent(req.params.id, req.body).then(r => res.send(r));

  studentAnswerQuestion = (req, res) => 
    universityDao.answerQuestion(req.params.sid, req.params.qid, req.body).then(r => res.send(r));


  findAnswersByStudent = (req, res) => {
    AnswerModel.find({question: req.params.qid, student: req.params.sid}).then(r => res.send(r));
  }


 app.post('/api/student', createStudent);
 app.get('/api/student/:id', findStudentById);
 app.get('/api/student', findAllStudents);
 app.delete('/api/student/:id', deleteStudent);
 app.put('/api/student/:id', updateStudent);
 app.post('/api/student/:sid/question/:qid/answer', studentAnswerQuestion);
 app.get('/api/student/:sid/question/:qid/answer', findAnswersByStudent);

}