const mongoose = require('mongoose');
const studentSchema = require('./student.schema.server');
var StudentModel = mongoose.model('students', studentSchema);




module.exports = StudentModel;
