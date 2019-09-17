const express = require('express');
const router = express.Router();
const log4js = require('log4js');
var logger = log4js.getLogger();
logger.level = 'info';
var packetCounter = require('./packetCounter');

router.use(packetCounter)


// router.get('/',(req,res)=>{
//     res.send("welcome to home page");
//     logger.info("home page hit");
// });
// router.get('/trackerLocation',(req,res)=>{
//     res.send("welcome to home page");
//     logger.info("location page hit");
// });
// router.put('/trackerLocation',(req,res)=>{
//     res.send("welcome to home page");
//     logger.info("location put page hit");
// });

module.exports = router;