const mongoose = require('mongoose');
const multipleChoiceSchema = mongoose.Schema(
	{
	  chices: String,
	  correct: Number
	}, 
	{collection: 'multipleChoice'}
);
module.exports = multipleChoiceSchema;