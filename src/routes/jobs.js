const express = require('express')
const Route = express.Router()
const auth = require('../helpers/auth')

const jobsController = require('../controllers/job')

Route
    .get('/', jobsController.getJobs)
    .post('/', auth.authInfo,auth.authAccess, jobsController.addJob)
    .patch('/:id_job', auth.authInfo,auth.authAccess, jobsController.updateJob)
    .delete('/:id_job', auth.authInfo,auth.authAccess, jobsController.deleteJob)

module.exports = Route