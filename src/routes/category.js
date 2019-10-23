const express = require('express')
const Route = express.Router()
const auth = require('../helpers/auth')

const categoryController = require('../controllers/category')

Route
    .get('/', categoryController.getCategory)
    .post('/', auth.authInfo,auth.authAccess, categoryController.addCategory)
    .patch('/:id_category', auth.authInfo,auth.authAccess, categoryController.updateCategory)
    .delete('/:id_category', auth.authInfo,auth.authAccess, categoryController.deleteCategory)

module.exports = Route