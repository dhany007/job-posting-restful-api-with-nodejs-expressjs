const express = require('express');
const bodyParser = require('body-parser');
const configs = require('./src/configs/configs');

const app = express();
const port = configs.port;
const routerNav = require('./src/index');
const logger = require('morgan');
const cors = require('cors');

app.listen(port, () => {
  console.log(`\nServer listening on port ${port}`);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(logger('dev'));
app.use('/', routerNav);
app.use(cors);

module.exports = app;
