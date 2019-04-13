const studentModel = require('../models/student.model.server')

createStudent = user =>
  studentModel.create(user)

findAllStudents = () =>
  studentModel.find()

findStudentById = (userId) => 
  studentModel.findById(userId)


updateStudent = (uid, user) =>
  studentModel
    .update({_id: uid},
      {$set: user})

deleteStudent = userId =>
  studentModel
    .remove({_id: userId})


module.exports = {
  createStudent,
  deleteStudent,
  findAllStudents,
  updateStudent,
  findStudentById
}

