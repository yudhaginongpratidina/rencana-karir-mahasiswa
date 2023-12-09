const express = require('express');
const router = express.Router();
const messageController = require('../controllers/MessageController');

router.get('/api/messages', messageController.getMessages);
router.post('/api/messages', messageController.createMessage);

router.get('/api/messages/:id', messageController.getMessageById);
router.delete('/api/messages/:id', messageController.deleteMessage);

module.exports = router;