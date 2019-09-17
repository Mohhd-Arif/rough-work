let saveToCSV = require('./csv1')

var packetManager = {
    'date':0,
    'totalApiHit' : 0,
    'totalLocHit': 0,
    'fetchLocHit': 0,
    'updateLocHit':0,
    'trackerList':{}
}

packetManagerData =[]

let packetCounter = function (req, res, next) {
    if(packetManager.date==0){
        packetManager.date = new Date();
    }
    currentDate= new Date()//date to compare
    
    if(packetManager.date.getDate() <currentDate.getDate()){
        packetManagerData.push(packetManager);
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
    delete packetManager.trackerList;
    delete packetManager.date;
    saveToCSV([packetManager])
    res.send('200');
}
module.exports = packetCounter;