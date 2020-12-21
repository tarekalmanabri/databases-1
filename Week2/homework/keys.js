const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  // port : 3307
});

connection.connect();

const queries = [
  "DROP DATABASE IF EXISTS week2_database",
  "CREATE DATABASE week2_database",
  "USE week2_database",

  "CREATE TABLE Authors (author_no int NOT NULL auto_increment unique key PRIMARY KEY, author_name varchar(50), university varchar(50), date_of_birth date, h_index int, gender enum ('m', 'f'), Collaborator int)",
  "ALTER TABLE Authors ADD CONSTRAINT FK_Collaborator FOREIGN KEY (Collaborator) REFERENCES Authors(author_no)",
  "insert into Authors values (NULL, 'Jane', 'Utrecht university', '1990-1-1', 10 , 'f', NULL)",
  "insert into Authors values (NULL, 'john', 'amsterdam university', '1991-1-1', 11 , 'm', NULL)",
  "insert into Authors values (NULL, 'johnny', 'amsterdam university', '1994-1-1', 11 , 'm', NULL)",
  "insert into Authors values (NULL, 'tarek', 'amsterdam university', '1992-1-1', 12 , 'm', NULL)",
  "insert into Authors values (NULL, 'tom', 'amsterdam university', '1992-1-1', 10 , 'm', NULL)",
  "insert into Authors values (NULL, 'ahmad', 'amsterdam university', '1996-1-1', 10 , 'm', NULL)",
  "insert into Authors values (NULL, 'edie', 'amsterdam university', '1992-1-1', 10 , 'f', NULL)",
  "insert into Authors values (NULL, 'yoss', 'amsterdam university', '1994-1-1', 10 , 'f', NULL)",
  "insert into Authors values (NULL, 'jara', 'amsterdam university', '1994-1-1', 10 , 'f', 7)",
  "insert into Authors values (NULL, 'samantha', 'Utrecht university', '1995-1-1', 10 , 'f', NULL)",
  "insert into Authors values (NULL, 'nick', 'amsterdam university', '1993-1-1', 10 , 'm', NULL)",
  "insert into Authors values (NULL, 'Fadi', 'amsterdam university', '1994-1-1', 10 , 'm', NULL)",
  "insert into Authors values (NULL, 'Sarah', 'amsterdam university', '1992-1-1', 10 , 'f', NULL)",
  "insert into Authors values (NULL, 'Michel', 'amsterdam university', '1991-1-1', 10 , 'm', NULL)",
  "insert into Authors values (NULL, 'Monica', 'amsterdam university', '1990-1-1', 10 , 'f', NULL)",
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
