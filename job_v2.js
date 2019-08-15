const schedule = require('node-schedule');

user_list=[1,2,3,4,5,6,7,8,9,10,11,12];

update_table = {}

function update_firm(corporate_id,firmware){
  console.log('i am running a loop and updating your user list');
}


function timevalidation(datetime){
  return new Promise((resolve,reject)=>{
    var given_datetime = new Date(datetime);
    Date.prototype.isvalid = function(){
      return this.getTime() === this.getTime();
    };
    if(given_datetime.isvalid()){
      let temp = new Date();
      if(temp < given_datetime){
        resolve()
      }
      else {
        reject("invalid date greater now time")
      }
      }
      else{
        reject("invalid date")
      }
  })
}



// job_scheduler(true,"pan","anything","4.5.3");
module.exports={ update_firm,
                timevalidation
                                }
