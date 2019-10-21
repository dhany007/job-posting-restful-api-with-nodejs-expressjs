const express = require('express')
const Route = express.Router()

const categoryController = require('../controllers/category')

Route.get('/category', categoryController)

module.exports = Route