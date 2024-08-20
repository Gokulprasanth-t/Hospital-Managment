const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  id:{
    type:Number,
  },
  firstName: {
    type: String,
    // required: true,
  },
  lastName: {
    type: String,
    // required: true,
  },
  dateOfBirth: {
    type: Date,
    // required: true,
  },
  phone: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    // required: true,
    unique: true,
  },
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
