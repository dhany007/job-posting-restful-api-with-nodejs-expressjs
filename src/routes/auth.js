const express = require('express')
const Route = express.Router()

const authController = require('../controllers/auth')

Route
    .post('/register', authController.Register)

module.exports = Route