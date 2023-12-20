const express = require('express');
const router = express.Router();

const bidangController = require('../controllers/BidangController');

router.get('/api/bidang', bidangController.getBidang);
router.get('/api/bidang/:kode', bidangController.getBidangByKode);

router.post('/api/bidang', bidangController.createBidang);
router.patch('/api/bidang/:kode', bidangController.updateBidang);

router.delete('/api/bidang/:kode', bidangController.deleteBidang);

module.exports = router;