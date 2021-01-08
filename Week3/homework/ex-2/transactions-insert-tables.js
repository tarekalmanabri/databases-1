let { queries, connection } = require("./tramsactions-create-tables.js");
queries = [
  "USE week3_database",
  "INSERT INTO account VALUES(101, 2000)",
  "INSERT INTO account VALUES(102, 1500)",
  "INSERT INTO account_changes VALUES(10, 102, 200, '2020-03-13', 'rent')",
  "INSERT INTO account_changes VALUES(10, 101, 500, '2020-05-2', 'rent')",
];
// queries.forEach((query) => {
//   connection.query(query, (err, results, fields) => {
//     if (err) {
//       throw err;
//     }
//     console.log(results);
//   });
// });
// connection.end();
