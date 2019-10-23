const express = require('express')
const Route = express.Router()

const authController = require('../controllers/auth')

Route
    .post('/register', authController.Register)
    .get('/login', authController.Login)

module.exports = Route