var mysql = require('mysql');

var con = mysql.createConnection({
  host: "rds-mysql-10mval.cn7hthmsur2l.us-east-2.rds.amazonaws.com",
  user: "val",
<<<<<<< HEAD
  password: "val",
  database:"BlancaZuluGZ"
=======
  password: "val"
>>>>>>> bbf4386b47b02a69a89d797c0f021d40f2ecb2e6
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
<<<<<<< HEAD
  con.query("show tables", function (err, result) {
   if (err) throw err;
   console.log("Result: " + JSON.stringify(result));
 });
});
=======
}); 
>>>>>>> bbf4386b47b02a69a89d797c0f021d40f2ecb2e6
