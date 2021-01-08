const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  // port: 3307
});

connection.connect();

let queries = [
  "DROP DATABASE IF EXISTS week3_database",
  "CREATE DATABASE week3_database",
  "USE week3_database",
  "CREATE TABLE account(account_number INT PRIMARY KEY, balance INT)",
  "CREATE TABLE account_changes(change_number INT PRIMARY KEY , account_number INT NOT NULL, amount INT, changed_date DATE, remark TEXT",
];

module.exports = { queries };
module.exports = { connection };
// queries.forEach((query) => {
//   connection.query(query, (err, results, fields) => {
//     if (err) {
//       throw err;
//     }
//     console.log(results);
//   });
// });
// connection.end();
