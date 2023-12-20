const express = require('express');
const router = express.Router();

const kriteriaController = require('../controllers/KriteriaController');

router.get('/api/kriteria', kriteriaController.getKriteria);
router.get('/api/kriteria/:kode', kriteriaController.getKriteriaByKode);
router.post('/api/kriteria', kriteriaController.createKriteria);
router.patch('/api/kriteria/:kode', kriteriaController.updateKriteria);
router.delete('/api/kriteria/:kode', kriteriaController.deleteKriteria);


module.exports = router