const express = require('express')
const Route = express.Router()

const companyController = require('../controllers/company')

Route
    .get('/', companyController.getCompany)

module.exports = Route