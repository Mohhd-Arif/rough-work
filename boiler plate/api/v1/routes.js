const express = require('express');
const router = express.Router();
const bodyparser = require('body-parser');
const log4js = require('log4js');
var logger = log4js.getLogger();
logger.level = 'info';

router.use(bodyparser.json());

var packetCounter = require('./packetCounter');
router.use(packetCounter);

router.post("/adduser",(req,res)=>{
  //logger.debug(req);
  console.log(req.body);
  res.send("hello from router");
});


module.exports = router;
