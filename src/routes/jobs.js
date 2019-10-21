const express = require('express')
const Route = express.Router()

const jobsController = require('../controllers/job')

Route
    .get('/', jobsController.getJobs)
    .post('/', jobsController.addJob)
    .patch('/:id_job', jobsController.updateJob)
    .delete('/:id_job', jobsController.deleteJob)

module.exports = Route