const mongoose = require('mongoose');
const Patient = require('../models/Patient');

// Get all patients
exports.getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json({ success: true, data: patients });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Create a new patient
exports.createPatient = async (req, res) => {
  try {
    const { firstName, lastName, dateOfBirth, phone, email } = req.body;

    // Check if email already exists
    const existingPatient = await Patient.findOne({ email });
    if (existingPatient) {
      return res.status(400).json({ success: false, message: 'Email already exists' });
    }

    const patient = new Patient({ firstName, lastName, dateOfBirth, phone, email });
    await patient.save();
    res.status(201).json({ success: true, data: patient });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get a patient by ID
exports.getPatientById = async (req, res) => {
  try {
    const patientId = req.params.id;

    // Validate ObjectId format
    if (!mongoose.Types.ObjectId.isValid(patientId)) {
      return res.status(400).json({ success: false, message: 'Invalid patient ID' });
    }

    const patient = await Patient.findById(patientId);
    if (!patient) {
      return res.status(404).json({ success: false, message: 'Patient not found' });
    }
    
    res.status(200).json({ success: true, data: patient });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update a patient by ID
exports.updatePatient = async (req, res) => {
  try {
    const patientId = req.params.id;

    // Validate ObjectId format
    if (!mongoose.Types.ObjectId.isValid(patientId)) {
      return res.status(400).json({ success: false, message: 'Invalid patient ID' });
    }

    const updatedPatient = await Patient.findByIdAndUpdate(patientId, req.body, { new: true, runValidators: true });
    if (!updatedPatient) {
      return res.status(404).json({ success: false, message: 'Patient not found' });
    }
    
    res.status(200).json({ success: true, data: updatedPatient });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete a patient by ID
exports.deletePatient = async (req, res) => {
  try {
    const patientId = req.params.id;

    // Validate ObjectId format
    if (!mongoose.Types.ObjectId.isValid(patientId)) {
      return res.status(400).json({ success: false, message: 'Invalid patient ID' });
    }

    const deletedPatient = await Patient.findByIdAndDelete(patientId);
    if (!deletedPatient) {
      return res.status(404).json({ success: false, message: 'Patient not found' });
    }

    res.status(200).json({ success: true, message: 'Patient deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
