var mysql = require('mysql');

var con = mysql.createConnection({
  host: "rds-mysql-10mval.cn7hthmsur2l.us-east-2.rds.amazonaws.com",
  user: "val",
  password: "val"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
}); 
