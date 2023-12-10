const express = require('express');
const router = express.Router();

const pekerjaanController = require('../controllers/PekerjaanController');

router.get('/api/pekerjaan', pekerjaanController.getPekerjaan);
router.get('/api/pekerjaan/:id', pekerjaanController.getPekerjaanById);

router.post('/api/pekerjaan', pekerjaanController.createPekerjaan);
router.patch('/api/pekerjaan/:id', pekerjaanController.updatePekerjaan);

router.delete('/api/pekerjaan/:id', pekerjaanController.deletePekerjaan);

module.exports = router;