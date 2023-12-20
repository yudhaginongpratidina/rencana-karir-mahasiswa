const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');

router.get('/api/users', UserController.getUsers);
router.post('/api/users', UserController.createUser);

router.get('/api/users/:id', UserController.getUserById);
router.patch('/api/users/:id', UserController.updateUser);

router.delete('/api/users/:id', UserController.deleteUser);

router.post('/api/users/login', UserController.login);

module.exports = router;