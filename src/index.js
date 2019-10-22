const express = require('express')
const Route = express.Router()
const auth = require('./routes/auth')

const jobs = require('./routes/jobs')
const categories = require('./routes/category')
const companies = require('./routes/company')

Route
    .use('/', jobs)
    .use('/category', categories)
    .use('/company', companies)
    .use('/auth', auth)

module.exports = Route