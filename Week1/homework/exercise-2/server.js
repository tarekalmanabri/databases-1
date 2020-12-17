const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "new_world",
  // port : 3307
  insecureAuth: true,
});

connection.connect();

const queries = [
  // What are the names of countries with population greater than 8 million?
  "SELECT Name FROM new_world.country WHERE Population >  8000000",
  // What are the names of countries that have “land” in their names?
  "SELECT Name FROM new_world.country WHERE Name like '%land%'",
  // What are the names of the cities with population in between 500,000 and 1 million?
  "SELECT Name FROM new_world.city WHERE Population > 500000 && Population < 1000000",
  // What's the name of all the countries on the continent ‘Europe’?
  "SELECT Name FROM new_world.country WHERE Continent = 'Europe'",
  // List all the countries in the descending order of their surface areas.
  "SELECT Name FROM new_world.country order by SurfaceArea desc",
  // What are the names of all the cities in the Netherlands?
  "SELECT Name FROM new_world.city WHERE CountryCode = 'NLD'",
  // What is the population of Rotterdam?
  "SELECT Population FROM new_world.city WHERE Name = 'Rotterdam'",
  //What's the top 10 countries by Surface Area?
  "SELECT Name FROM new_world.country order by SurfaceArea desc LIMIT 10",
  // What's the top 10 most populated cities?
  "SELECT Name, Population FROM new_world.city order by Population desc LIMIT 10",
  //What is the population number of the world?
  "SELECT SUM(Population) FROM new_world.country",
];

queries.forEach((query) => {
  connection.query(query, (error, results, fields) => {
    if (error) throw error;
    console.log(query);
    console.log(results);
  });
});

connection.end();
