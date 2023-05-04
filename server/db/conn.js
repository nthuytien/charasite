const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.ATLAS_URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
 
var _db;
 
module.exports = {
  /*connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db)
      {
        _db = db.db("CPR");
        console.log("Successfully connected to MongoDB."); 
      }
      return callback(err);
         });
  },*/

  connectToServer: function(callback) {
    client.connect().then(_db = client.db("CPR"))
  },
 
  getDb: function () {
    return _db;
  },
};