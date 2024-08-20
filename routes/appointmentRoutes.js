const express = require('express');
const {
  getAllAppointments,
  createAppointment,
  getAppointmentById,
  updateAppointment,
  deleteAppointment,
} = require('../controllers/appointmentController');

const router = express.Router();

router.get('/getall', getAllAppointments);
router.post('/create', createAppointment);
router.get('/getspecific/:id', getAppointmentById);
router.put('/update/:id', updateAppointment);
router.delete('/delete/:id', deleteAppointment);

module.exports = router;
