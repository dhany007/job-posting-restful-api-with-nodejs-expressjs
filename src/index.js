const express = require('express')
const Route = express.Router()

const jobs = require('./routes/jobs')
const categories = require('./routes/category')

Route
    .use('/', jobs)
    .use('/category', categories)
module.exports = Route