const express = require('express');
const router = express.Router();

const historyController = require('../controllers/HistoryController');

router.get('/api/history', historyController.getHistory);
router.post('/api/history', historyController.createHistory);
router.delete('/api/history/:id', historyController.deleteHistory);

module.exports = router