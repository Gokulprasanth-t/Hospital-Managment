const express = require('express');
const {
  getAllDoctors,
  createDoctor,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
} = require('../controllers/doctorController');

const router = express.Router();

router.get('/getall', getAllDoctors);
router.post('/create', createDoctor);
router.get('/getspecific/:id', getDoctorById);
router.put('/update/:id', updateDoctor);
router.delete('/delete/:id', deleteDoctor);

module.exports = router;
