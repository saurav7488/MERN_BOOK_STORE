const express = require('express')
const app = express()
const port =  process.env.PORT ||  4000
const cors = require('cors')

// middleware 
app.use(cors())
app.use(express.json())

//3yMY02pff8J5BxUH


app.get('/', (req, res) => {
  res.send('Hello World!')
})

// mongodb config

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://Book_Mern:3yMY02pff8J5BxUH@cluster0.bjkk1rt.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
// 38:10

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
        
    // create a collection of database
    const booksCollection = client.db("BookInventory").collection("books")
    // Insert Book to the database : post method
    app.post("/uploadBook",async(req,res)=>{
         const data = req.body
         const result = await booksCollection.insertOne(data)
         res.send(result)
    })

    // Get all books from database
    // app.get("/allBooks",async(req,res)=>{
    //       const book = booksCollection.find()
    //       const result = await book.toArray()
    //       res.send(result) 
    // })

    // Updated Book 
    app.patch("/book/:id",async(req,res)=>{
          const id = req.params.id 
          // console.log(id)
          const updateBookdata = req.body
          const filter = {_id:new ObjectId(id)}
          const options = {upsert:true}
          const updateDoc = {
                $set: {
                  ...updateBookdata 
                }
          }
          // update 
           const result = await booksCollection.updateOne(filter,updateDoc,options) 
           res.send(result)
    })


    // Delete Method 
    app.delete("/book/:id",async(req,res)=>{
        const id = req.params.id
        const filter = {_id:new ObjectId(id)}
        const result = await booksCollection.deleteOne(filter)
        res.send(result)
    })


    // find category 

    app.get("/allBooks",async(req,res)=>{
          let query = {}
          if(req.query?.category) {
               query={category:req.query.category}
          }
          const result = await booksCollection.find(query).toArray()
          res.send(result)
    })
    
     // single book
      
     app.get("/book/:id",async (req,res)=>{
            const id = req.params.id 
            const filter = {_id:new ObjectId(id)}
            const result = await booksCollection.findOne(filter)
            res.send(result)
     })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})