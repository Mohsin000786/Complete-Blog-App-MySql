const express = require('express');
const { addUser, UpdateUser } = require('../controller/userController');

const router = express.Router();

router.put('/:id', UpdateUser)

module.exports = router;