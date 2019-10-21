const express = require('express')
const Route = express.Router()

const companyController = require('../controllers/company')

Route.get('/company', companyController)

module.exports = Route