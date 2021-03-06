/* eslint-disable new-cap */
/* eslint-disable max-len */
const express = require('express');
const Route = express.Router();

const companyController = require('../controllers/company');
const auth = require('../helpers/auth');
const upload = require('../helpers/uploads');

Route
    .get('/', companyController.getCompany)
    .get('/:id_company', companyController.getOneCompany)
    .post('/', auth.authInfo, auth.authAccess, upload.single('logo'), companyController.addCompany)
    .patch('/:id_company', auth.authInfo, auth.authAccess, upload.single('logo'), companyController.updateCompany)
    .delete('/:id_company', auth.authInfo, auth.authAccess, companyController.deleteCompany);

// Route
//     .get('/', companyController.getCompany)
//     .get('/:id_company', companyController.getOneCompany)
//     .post('/', upload.single('logo'), companyController.addCompany)
//     .patch('/:id_company', upload.single('logo'), companyController.updateCompany)
//     .delete('/:id_company', companyController.deleteCompany);

module.exports = Route;
