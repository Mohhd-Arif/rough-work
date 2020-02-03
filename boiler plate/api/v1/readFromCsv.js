const csv=require('csvtojson')
csv()
.fromFile('./test.csv')
.then((jsonObj)=>{
    console.log(jsonObj)
})

module.exports = csv;
// Async / await usage