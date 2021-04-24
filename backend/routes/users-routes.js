const express = require('express');

const router = express.Router();

const usersControllers = require('../controllers/users-controllers');

router.get('/:uid', usersControllers.getUserByID);

router.post('/', usersControllers.createUser);

router.patch('/:uid', usersControllers.updateUser);

router.delete('/:uid', usersControllers.deleteUser);

module.exports = router;