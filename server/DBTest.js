
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://queengosscanfloss:L8v991nJge4ksOAO@cluster0.3x6pofh.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("CPR").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    //await client.db("CPR").listCollections().toArray().then(cols => console.log("Collections", cols))

    await client.db("CPR").collection("players").find({}).toArray().then(results=>console.log("Results", results))

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
