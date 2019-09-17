// var csv = require('csv');
const fs = require('fs')
const json2csv = require('json2csv');


function saveToCSV(data){
    var json = {
        "car":[
         {
          "name":"Audi",
          "price":"40000",
          "color":"blue"
         }
        ]
       };
       
       json2csv({data: json.car, fields: ['name', 'price', 'color']}, function(err, csv) {
         if (err) console.log(err);
         fs.writeFile('test.csv', csv, function(err) {
           if (err) throw err;
           console.log('cars file saved');
         });
       });


}
// saveToCSV();


module.exports = saveToCSV;