let saveToCSV = require('./csv1')
const csv=require('csvtojson')
var path = require('path');

var packetManager = {
    'date':0,
    'totalApiHit' : 0,
    'totalLocHit': 0,
    'fetchLocHit': 0,
    'updateLocHit':0,
    'trackerList':{}
}

packetManagerData =[]

function readCSV() {
    return new Promise((resolve,reject) => {
        var filePath = path.join(__dirname, './test.csv');
        csv()
        .fromFile(filePath)
        .then((jsonObj)=>{
            resolve(jsonObj)
        }).catch(()=>reject("No file exists"))
    });
}

let packetCounter = async function (req, res, next) {
    if(packetManager.date==0){
        packetManager.date = new Date();
        await readCSV()
        .then(storedStats=>{
            console.log(storedStats,"--------------------------------------------csv file")
            var storedtime = new Date(0);
            storedtime.setUTCMilliseconds(storedStats[0].date);
            // console.log(storedtime.getDate(),"previous time")
            if(packetManager.date.getDate() === storedtime.getDate() && packetManager.date.getMonth() == storedtime.getMonth()){
            packetManager = storedStats[0];
            packetManager.date = storedtime;
            // console.log(packetManager,"compare between")
            }
        })
        .catch(message=>console.log(message));
        
    }
    let currentDate= new Date()//date to compare
    
    if(packetManager.date.getDate() <currentDate.getDate() || packetManager.date.getMonth()<currentDate.getMonth()){
        // packetManagerData.push(packetManager);
        console.log("dumping=============")
        saveToCSV([packetManager],true)
        packetManager = {
            date:new Date(),
            totalApiHit : 0,
            totalLocHit: 0,
            fetchLocHit: 0,
            updateLocHit:0,
            trackerList:{}
        }
        
    }

        ++packetManager.totalApiHit;
        if(req.path === "/trackerLocation"){
            ++packetManager.totalLocHit;
            let UUID ;
            if(req.method == "PUT"){
                ++packetManager.updateLocHit;
                UUID = req.body.UUID;
            }
            if(req.method == "GET"){
                ++packetManager.fetchLocHit;
                UUID = req.query.UUID;
            }
            packetManager.trackerList[UUID] = (packetManager.trackerList.hasOwnProperty(UUID)) ? ++packetManager.trackerList[UUID]: 1;
        
        }

    console.log(packetManager,"packet MANAGER")
    console.log(packetManagerData,"packetmanager data")
    // delete packetManager.trackerList;
    // delete packetManager.date;
    saveToCSV([packetManager])
    res.send('200');
}
module.exports = packetCounter;