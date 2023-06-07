const express = require('express');
const { getUsers } = require('../controllers/auth');
const router = express.Router();

router.get('/getUsers', getUsers);

module.exports = router;