const express = require('express')
const Route = express.Router()

const jobs = require('./routes/jobs')
const categories = require('./routes/category')
const companies = require('./routes/company')
const authe = require('./routes/auth')

Route
    .use('/', jobs)
    .use('/category', categories)
    .use('/company', companies)
    .use('/auth', authe)

module.exports = Route