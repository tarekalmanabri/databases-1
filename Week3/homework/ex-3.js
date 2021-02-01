const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "new_world",
  multipleStatements: true,
});

// first part

// function getPopulation(Country, name, code, cb) {
//   // assuming that connection to the database is established and stored as conn
//   conn.query(
//     `SELECT Population FROM ${Country} WHERE Name = '${name}' and code = '${code}'`,
//     function (err, result) {
//       if (err) cb(err);
//       if (result.length == 0) cb(new Error("Not found"));
//       cb(null, result[0].name);
//     }
//   );
// }

// getPopulation("Country", "Germany", "DEU", (err, result) => {
//   if (err) console.log(err);
//   console.log(result);
// });
//
// getPopulation(
//   "Country",
//   "'Germany'",
//   "'DEU' OR 1=1, show tables",
//   (err, result) => {
//     if (err) console.log(err);
//     console.log(result);
//   }
// );

// second part (fixed)

function getPopulation(Country, name, code, cb) {
  conn.query(
    `SELECT Population FROM ${Country} WHERE Name = ? and code = ?`,
    [name, code],
    function (err, result) {
      if (err) cb(err);
      if (result.length == 0) cb(new Error("Not found"));
      cb(null, result[0].name);
    }
  );
}
getPopulation("Germany", "DEU", (err, result) => {
  if (err) console.log(err);
  console.log(result);
  conn.end();
});
