const express = require('express');
const router = express.Router();
const log4js = require('log4js');
var logger = log4js.getLogger();
logger.level = 'info';


router.get('/',(req,res)=>{
    res.send("welcome to home page");
    logger.info("home page hit");
});

module.exports = router;