function timevalidation(datetime){
  return new Promise((resolve,reject)=>{
    var given_datetime = new Date(datetime);
    Date.prototype.isvalid = function(){
      return this.getTime === this.getTime();
    };
    if(given_datetime.isvalid()){
      let temp = new Date();
      if(temp < given_datetime){
        resolve()
      }
      else{
        reject("invalid date")
      }
    }
  })
}
