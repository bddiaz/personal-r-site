const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "remote",
  password: "password",
  database: "pupusas",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
  // connection.query('SELECT * FROM orders', (error, results, fields) =>{
  //     if (error) {
  //         return console.error(error.message);
  //       }
  //       console.log(results);
  // })
});

