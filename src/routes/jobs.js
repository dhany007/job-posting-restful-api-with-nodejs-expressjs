const express = require('express')
const Route = express.Router()

const jobsController = require('../controllers/job')

Route.get('/', jobsController.getJobs)

module.exports = Route