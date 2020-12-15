// const express = require("express");
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  // database: "meetup",
  // port : 3307
  insecureAuth: true,
});

connection.connect();

const createQuery = [
  "drop database meetup",
  "create database meetup",
  "use meetup",

  "create table Invites (invite_no int, invitee_name varchar(50), invited_by varchar(50))",
  "create table room (room_no int, room_name varchar(50), floor_number int)",
  "create table Meeting (meeting_no int, meeting_title varchar(50), starting_time time, ending_time time, room_no int)",

  "insert into invites values (106, 'Ibrahim', 'Tom')",
  "insert into invites values (107, 'Tarek', 'Tommy')",
  "insert into invites values (103, 'Jonh', 'Ahmad')",
  "insert into invites values (104, 'Nour', 'Colin')",
  "insert into invites values (102, 'Wouter', 'Tjebbe')",
  "insert into room values (2, 'smthing', 1)",
  "insert into room values (4, 'smthing', 2)",
  "insert into room values (5, 'smthing', 3)",
  "insert into room values (1, 'smthing', 5)",
  "insert into room values (8, 'smthing', 4)",
  "insert into Meeting values (6, 'standup', '10:00', '10:30', 40)",
  "insert into Meeting values (3, 'standup', '10:00', '10:30', 41)",
  "insert into Meeting values (2, 'standup', '10:00', '10:30', 41)",
  "insert into Meeting values (4, 'standup', '10:00', '10:30', 42)",
  "insert into Meeting values (5, 'standup', '10:00', '10:30', 45)",
];

createQuery.forEach((query) => {
  connection.query(query, (error, results, fields) => {
    if (error) throw error;
    console.log(query);
    console.log(results);
  });
});

connection.end();
