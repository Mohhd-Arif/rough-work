const express = require('express');
const app = express();
const bodyparser =require('body-parser')
const router1 = require('./api/v1/routes');
const log4js = require('log4js');
var logger = log4js.getLogger();
logger.level = 'info';

app.use(bodyparser.json())

app.use('/api/v1',router1);

app.listen(8000,()=>logger.info("listening on port 8000"));