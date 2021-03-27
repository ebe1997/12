const util = require("util");
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: 'localhost',
  // Your username
  user: 'root',
  // Your password
  password: "rootroot",
  database: "employees_db",
  insecureAuth: true,
  port: 3306

});



// connection.connect(function (err){
//   if (err){
//     return console.error("error: " + err.message) 
//   }
//   console.log("connected to my sql") 
// });

// Setting up connection.query to use promises instead of callbacks
// This allows us to use the async/await syntax
connection.query = util.promisify(connection.query);

module.exports = connection;
