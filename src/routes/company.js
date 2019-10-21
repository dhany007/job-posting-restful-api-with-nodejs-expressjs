const express = require('express')
const Route = express.Router()

const companyController = require('../controllers/company')

Route
    .get('/', companyController.getCompany)
    .post('/', companyController.addCompany)
    .patch('/:id_company', companyController.updateCompany)
    .delete('/:id_company', companyController.deleteCompany)
    
module.exports = Route