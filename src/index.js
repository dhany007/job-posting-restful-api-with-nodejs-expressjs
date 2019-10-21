const express = require('express')
const Route = express.Router()

const jobs = require('./routes/jobs')

Route
    .use('/',jobs)

module.exports = Route