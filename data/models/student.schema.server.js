const mongoose = require('mongoose');
const studentSchema = mongoose.Schema(
	{
	  gradYear: Number,
	  scholarship: Number,
	  lastname: String,
	  firstname: String,
	  username: String,
	  password: String,
	  _id: Number
	}, 
	{collection: 'students'}
);
module.exports = studentSchema;