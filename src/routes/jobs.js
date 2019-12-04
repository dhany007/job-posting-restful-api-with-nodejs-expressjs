/* eslint-disable new-cap */
/* eslint-disable max-len */
const express = require('express');
const Route = express.Router();
const auth = require('../helpers/auth');
//const redis = require('../helpers/redis');

const jobsController = require('../controllers/job');

Route
    .get('/', jobsController.getJobs)
    .get('/:id_job', jobsController.getOneJob)
    .post('/', auth.authInfo, auth.authAccess, jobsController.addJob)
    .patch('/:id_job', auth.authInfo, auth.authAccess, jobsController.updateJob)
    .delete('/:id_job', auth.authInfo, auth.authAccess, jobsController.deleteJob);


// Route
//     .get('/', jobsController.getJobs)
//     .get('/job/:id_job', jobsController.getOneJob)
//     .post('/', jobsController.addJob)
//     .patch('/:id_job', jobsController.updateJob)
//     .delete('/:id_job', jobsController.deleteJob);

module.exports = Route;
