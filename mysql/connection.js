const mysql = require("mysql");

const connection = mysql.createConnection({
  port: 3306,
  database: "fantasyf_demo",
  user: "fantasyf_demo",
  password: "y_+uGvDDcjZJ",
  host: "91.238.161.176",
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
