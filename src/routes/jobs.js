/* eslint-disable new-cap */
/* eslint-disable max-len */
const express = require('express');
const Route = express.Router();
const auth = require('../helpers/auth');
const redis = require('../helpers/redis');

const jobsController = require('../controllers/job');

Route
    .get('/', redis.cache, jobsController.getJobs)
    .post('/', auth.authInfo, auth.authAccess, jobsController.addJob)
    .patch('/:id_job', auth.authInfo, auth.authAccess, jobsController.updateJob)
    .delete('/:id_job', auth.authInfo, auth.authAccess, jobsController.deleteJob);

module.exports = Route;
