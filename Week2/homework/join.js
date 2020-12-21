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

  "CREATE TABLE Research_Papers (paper_id int NOT NULL auto_increment PRIMARY KEY, author_no int NOT NULL, paper_title varchar(50), conference varchar(50), publish_date date)",
  "ALTER TABLE Research_Papers ADD CONSTRAINT R_P_author FOREIGN KEY (author_no) REFERENCES Authors(author_no)",

  "insert into Authors values (NULL, 'Jane', 'Utrecht university', '1990-1-1', 10 , 'f', NULL)",
  "insert into Authors values (NULL, 'john', 'amsterdam university', '1991-1-1', 11 , 'm', NULL)",
  "insert into Authors values (NULL, 'johnny', 'amsterdam university', '1994-1-1', 11 , 'm', NULL)",
  "insert into Authors values (NULL, 'tarek', 'amsterdam university', '1992-1-1', 12 , 'm', 2)",
  "insert into Authors values (NULL, 'tom', 'amsterdam university', '1992-1-1', 10 , 'm', NULL)",
  "insert into Authors values (NULL, 'ahmad', 'amsterdam university', '1996-1-1', 10 , 'm', 1)",
  "insert into Authors values (NULL, 'edie', 'amsterdam university', '1992-1-1', 10 , 'f', NULL)",
  "insert into Authors values (NULL, 'yoss', 'amsterdam university', '1994-1-1', 10 , 'f', NULL)",
  "insert into Authors values (NULL, 'jara', 'amsterdam university', '1994-1-1', 10 , 'f', 7)",
  "insert into Authors values (NULL, 'samantha', 'Utrecht university', '1995-1-1', 10 , 'f', NULL)",
  "insert into Authors values (NULL, 'nick', 'amsterdam university', '1993-1-1', 10 , 'm', NULL)",
  "insert into Authors values (NULL, 'Fadi', 'amsterdam university', '1994-1-1', 10 , 'm', 6)",
  "insert into Authors values (NULL, 'Sarah', 'amsterdam university', '1992-1-1', 10 , 'f', NULL)",
  "insert into Authors values (NULL, 'Michel', 'amsterdam university', '1991-1-1', 10 , 'm', 4)",
  "insert into Authors values (NULL, 'Monica', 'amsterdam university', '1990-1-1', 10 , 'f', NULL)",

  "insert into Research_Papers values (NULL, 1, 'Some Title', 'Javascript Dime', '2016-2-1')",
  "insert into Research_Papers values (NULL, 1, 'Some Title', 'Javascript Dime', '2016-4-6')",
  "insert into Research_Papers values (NULL, 15, 'Some Title', 'Javascript Dime', '2016-4-10')",
  "insert into Research_Papers values (NULL, 2, 'Some Title', 'Javascript Dime', '2016-4-27')",
  "insert into Research_Papers values (NULL, 15, 'Some Title', 'Javascript Dime', '2016-5-2')",
  "insert into Research_Papers values (NULL, 2, 'Some Title', 'Javascript Dime', '2016-5-8')",
  "insert into Research_Papers values (NULL, 3, 'Some Title', 'Javascript Dime', '2016-5-14')",
  "insert into Research_Papers values (NULL, 3, 'Some Title', 'Javascript Dime', '2016-5-27')",
  "insert into Research_Papers values (NULL, 4, 'Some Title', 'Javascript Dime', '2016-6-7')",
  "insert into Research_Papers values (NULL, 14, 'Some Title', 'Javascript Dime', '2016-6-10')",
  "insert into Research_Papers values (NULL, 5, 'Some Title', 'Javascript Dime', '2016-6-14')",
  "insert into Research_Papers values (NULL, 6, 'Some Title', 'Javascript Dime', '2016-6-16')",
  "insert into Research_Papers values (NULL, 7, 'Some Title', 'Javascript Dime', '2016-6-28')",
  "insert into Research_Papers values (NULL, 10, 'Some Title', 'Javascript Dime', '2016-7-1')",
  "insert into Research_Papers values (NULL, 12, 'Some Title', 'Javascript Dime', '2016-7-5')",
  "insert into Research_Papers values (NULL, 10, 'Some Title', 'Javascript Dime', '2016-7-7')",
  "insert into Research_Papers values (NULL, 12, 'Some Title', 'Javascript Dime', '2016-7-20')",
  "insert into Research_Papers values (NULL, 13, 'Some Title', 'Javascript Dime', '2016-7-23')",
  "insert into Research_Papers values (NULL, 1, 'Some Title', 'Javascript Dime', '2016-7-28')",
  "insert into Research_Papers values (NULL, 2, 'Some Title', 'Javascript Dime', '2016-8-1')",
  "insert into Research_Papers values (NULL, 9, 'Some Title', 'Javascript Dime', '2016-8-12')",
  "insert into Research_Papers values (NULL, 4, 'Some Title', 'Javascript Dime', '2016-8-17')",
  "insert into Research_Papers values (NULL, 6, 'Some Title', 'Javascript Dime', '2016-8-20')",
  "insert into Research_Papers values (NULL, 7, 'Some Title', 'Javascript Dime', '2016-8-22')",
  "insert into Research_Papers values (NULL, 7, 'Some Title', 'Javascript Dime', '2016-8-26')",
  "insert into Research_Papers values (NULL, 8, 'Some Title', 'Javascript Dime', '2016-8-29')",
  "insert into Research_Papers values (NULL, 9, 'Some Title', 'Javascript Dime', '2016-9-1')",
  "insert into Research_Papers values (NULL, 10, 'Some Title', 'Javascript Dime', '2016-9-5')",
  "insert into Research_Papers values (NULL, 11, 'Some Title', 'Javascript Dime', '2016-12-2')",

  // it will print the ones that have a collaborator only
  "SELECT a.author_name, b.author_name AS Collaborator FROM Authors a inner join Authors b ON a.author_no = b.Collaborator",

  "SELECT Authors.author_name, Authors.author_no, Authors.university, Authors.gender, Authors.date_of_birth, Authors.h_index, Research_Papers.paper_title FROM Authors JOIN Research_Papers ON Authors.author_no = Research_Papers.author_no",
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
