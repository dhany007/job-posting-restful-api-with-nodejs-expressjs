/* eslint-disable new-cap */
const express = require('express');
const Route = express.Router();

Route
    .post('/cloudinary', uploadCpntroller.uploadCloudinary );

module.exports = Route;
