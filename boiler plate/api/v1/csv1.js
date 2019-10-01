// var csv = require('csv');
const ObjectsToCsv = require('objects-to-csv');


function saveToCSV(data,bool=false){
  if(bool){
    (async () => {
      const csv = new ObjectsToCsv(data);
     
      // Save to file:
      await csv.toDisk('./api/v1/main.csv',{append:true});
     
      // Return the CSV file as string:
      // console.log(await csv.toString());
    })();

  }
else{
  (async () => {
    const csv = new ObjectsToCsv(data);
   
    // Save to file:
    await csv.toDisk('./api/v1/test.csv');
   
    // Return the CSV file as string:
    // console.log(await csv.toString());
  })();
}

}
// saveToCSV();


module.exports = saveToCSV;