const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// Connection URL
const url =
  "mongodb+srv://dbTarek:321456789@cluster0.k3fpp.mongodb.net/test?retryWrites=true";

// Use connect method to connect to the Server
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
  assert.equal(null, err);

  const db = client.db("world");

  // add to the database
  db.collection("City")
    .insertOne({
      _id: "5ff7175f4c124c84949bd278",
      ID: 5000,
      Name: "Amarrah",
      CountryCode: "SYR",
      District: "Damascus",
      Population: 100000,
    })
    .then(function (result) {
      console.log(result);
    });

  // update the document

  db.collection("City")
    .updateOne(
      { ID: 5000 },
      {
        $set: { Population: 120000 },
        $currentDate: { lastModified: true },
      }
    )
    .then(function (result) {
      // process result
      console.log(result);
    });

  // read the document

  let cursor = db.collection("City").find({ ID: 5000 });

  cursor.forEach(iterateFunc, errorFunc);

  // delete the document

  db.collection("City")
    .deleteOne({
      ID: 5000,
    })
    .then(function (result) {
      // process result
      console.log(result);
    });
});

function iterateFunc(doc) {
  console.log(JSON.stringify(doc, null, 4));
}

function errorFunc(error) {
  console.log(error);
}
