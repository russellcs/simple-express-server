const mysql = require("mysql");

const connection = mysql.createConnection({
  port: 3306,
  database: "account",
  user: "root",
  password: "",
  host: "localhost",
});

connection.connect();

function asyncMySQL(query) {
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
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
