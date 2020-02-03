var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "database_1"
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  // var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table created");
  // });(name, address) VALUES ('Company Inc', 'Highway 37')";
  // let dataset = {name:"Company1",address:"highway"};
  //   var sql = "INSERT INTO customers SET ? ";
  //   con.query(sql,dataset, function (err, result) {
  //     if (err) throw err;
  //     console.log("1 record inserted",result);
  // });
  let dataset = ["name","Company12","address","highway 164"];
  var sql = "INSERT INTO customers SET ?? = ? , ?? = ?";
  con.query(sql,dataset, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
  con.query("SELECT * FROM customers WHERE name = 'Company'",['customers','name','Company'], function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });

});
