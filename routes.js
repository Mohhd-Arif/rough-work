var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');
// var list = require('lister');
const schedule = require('node-schedule');

const job = require('./job_v2');

var p = new Date();
// console.log(p.toISOString());

router.use(bodyparser.json());
var scheduled_work_list = 0;

// schedule a work
// router.post('/schedulework',(req, res)=> {
// 	var datetime = req.query.datetime;
// 	var corporate_id = //// id
// 	var is_now = /// true or false
// 	var firmware_v = //2.0.4


router.post('/schedulework',(req, res)=> {
    var is_now = req.query.is_now;
    var list = req.body;
    var corporate_id = req.query.corporate_id;
    var firmware = req.query.firmware;
    var datedata = req.query.datetime;
    var time = new Date(datedata);
    task_run_time = new Date(time.toGMTString());
    task_run_time = task_run_time.toISOString();
    console.log("new time",task_run_time);

    console.log(is_now,corporate_id,firmware,datedata);
    if(is_now == "true"){
      job.update_firm(corporate_id,firmware);
      console.log(task_run_time);
    }
    else{
      var root = job.timevalidation(datedata);
      root.then(()=>{
        
        console.log(("hey---------------"));
        var task = schedule.scheduleJob(time,()=>{
          job.update_firm(corporate_id,firmware);
      });
      console.log("job is scheduled");
      res.send("job is scheduled"+task.name+task_run_time);
    }).catch((message)=>{
      res.send(message);
      
    });

    }
  });


router.patch('/update_scheduledwork',(req,res)=>{
	var datetime = req.query.datetime;
	var update_job_id = req.query.job_id;
	job.updatejob(update_job_id,datetime);
	res.send("job is been updated")
});


router.delete('/deletejob',(req,res)=>{
    var del_job_id = req.query.job_id;
    job.deletejob(del_job_id);
    res.send("job is been deleted");
})

module.exports = router;
