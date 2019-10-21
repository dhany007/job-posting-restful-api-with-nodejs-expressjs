const express = require('express')
const Route = express.Router()

const jobs = require('./routes/jobs')
const categories = require('./routes/category')
const companies = require('./routes/company')

Route
    .use('/', jobs)
    .use('/category', categories)
    .use('/company', companies)

module.exports = Route