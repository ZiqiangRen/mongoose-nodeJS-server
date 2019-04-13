const mongoose = require('mongoose');

const TrueFalseSchema = require('./true-false.schema.server.js')
const MultipleChoiceSchema = require('./multiple-choice.schema.server.js')

const questionSchema = mongoose.Schema(
	{
	  _id: Number,
	  questionType: {type: String, required:true},
	  points: Number,
	  question: String,
	  multipleChoice: MultipleChoiceSchema,
      trueFalse: TrueFalseSchema
	}, 
	{collection: 'questions'}
);
module.exports = questionSchema;