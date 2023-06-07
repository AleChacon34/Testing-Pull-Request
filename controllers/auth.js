const { matchedData } = require('express-validator');
const { userModel } = require('../models/index');

/**
 * GET USERS
 */
const getUsers = async (req, res) => {
    const data = await userModel.find({});
    res.send({ saludo:'Hola' });
}

module.exports = { getUsers };