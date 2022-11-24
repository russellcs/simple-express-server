const mysql = require("mysql");

const connection = mysql.createConnection({
  port: 3306,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
});

connection.connect();

function asyncMySQL(query, vars) {
  return new Promise((resolve, reject) => {
    connection.query(query, vars, (error, results) => {
      if (error) {
        console.log(
          "Connection to server failed, check server is running",
          error
        );
        reject("mySQL said no!");
      }

      resolve(results);
    });
  });
}

module.exports = asyncMySQL;
