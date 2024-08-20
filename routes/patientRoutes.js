const express = require('express');
const {
  getAllPatients,
  createPatient,
  getPatientById,
  updatePatient,
  deletePatient,
} = require('../controllers/patientController');

const router = express.Router();

router.get('/getall', getAllPatients);
router.post('/create', createPatient);
router.get('/getspecific/:id', getPatientById);
router.put('/update/:id', updatePatient);
router.delete('/delete/:id', deletePatient);

module.exports = router;
