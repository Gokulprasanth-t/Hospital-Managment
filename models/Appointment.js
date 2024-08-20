const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  patientId: {
    type: String,
    // required: true,
    ref: 'Patient', // Reference to the Patient model
  },
  doctorId: {
    type: String,
    // required: true,
    ref: 'Doctor', // Reference to the Doctor model
  },
  date: {
    type: Date,
    // required: true,
  },
  time: {
    type: String,
    // required: true,
  },
  notes: {
    type: String,
  },
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
