const express = require('express')
const Route = express.Router()

const companyController = require('../controllers/company')
const auth = require('../helpers/auth')

Route
    .get('/', companyController.getCompany)
    .post('/', auth.authInfo,auth.authAccess, companyController.addCompany)
    .patch('/:id_company', auth.authInfo,auth.authAccess, companyController.updateCompany)
    .delete('/:id_company', auth.authInfo,auth.authAccess, companyController.deleteCompany)
    
module.exports = Route