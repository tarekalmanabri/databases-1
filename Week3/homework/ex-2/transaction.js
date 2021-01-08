let { queries, connection } = require("./tramsactions-create-tables.js");
queries = [
  "USE week3_database",
  "SET AUTOCOMMIT = 0",
  "START TRANSACTION",
  "UPDATE account SET balance = balance - 1000 WHERE account_number = 101",
  "UPDATE account SET balance = balance + 1000 WHERE account_number = 102",
  "COMMIT",
];
queries.forEach((query) => {
  connection.query(query, (err, results, fields) => {
    if (err) {
      throw err;
    }
    console.log(results);
  });
});
connection.end();
