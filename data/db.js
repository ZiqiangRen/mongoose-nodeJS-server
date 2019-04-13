module.exports = function () {
  const mongoose = require('mongoose');
  const mydb = 'white-board';
  var   connectionString = 'mongodb://localhost/';
  connectionString += mydb;
  mongoose.connect(connectionString);
};