const express = require('express');
const router = express.Router();

const pekerjaanController = require('../controllers/PekerjaanController');

router.get('/api/pekerjaan', pekerjaanController.getPekerjaan);
router.get('/api/pekerjaan/:kode', pekerjaanController.getPekerjaanByKode);

router.post('/api/pekerjaan', pekerjaanController.createPekerjaan);
router.patch('/api/pekerjaan/:kode', pekerjaanController.updatePekerjaan);

router.delete('/api/pekerjaan/:kode', pekerjaanController.deletePekerjaan);

module.exports = router;