function saveToDB(data){
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root123",
        database: "manager"
      });
      
      con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = " INTO PACKETMANAGER (Api, Hits) VALUES ?";
        var values = data;
        con.query(sql, [values], function (err, result) {
          if (err) throw err;
          console.log("Number of records inserted: " + result.affectedRows);
        });
      });
}