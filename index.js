const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require("express")
const app = express()
const cors = require("cors")
const port = process.env.PORT || 5000
require("dotenv").config()

app.use(cors())
app.use(express.json())


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ltefwui.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const run = async () => {

    try {
        const allProducts = client.db("Jizziby").collection("allProducts")
        const laptopsCollection = client.db("Jizziby").collection("laptops")
        const laptopsBatteries = client.db("Jizziby").collection("laptopsBattery")
        const televisions = client.db("Jizziby").collection("televisions")
        const phones = client.db("Jizziby").collection("phones")
        const tablets = client.db("Jizziby").collection("tablets")
        const smartWatches = client.db("Jizziby").collection("smartWatches")
        const gpus = client.db("Jizziby").collection("gpus")
        const headphones = client.db("Jizziby").collection("headphones")
        const speakers = client.db("Jizziby").collection("speakers")
        const earPhones = client.db("Jizziby").collection("earPhones")
        const controllers = client.db("Jizziby").collection("controllers")
        const consoles = client.db("Jizziby").collection("consoles")
        const drones = client.db("Jizziby").collection("drones")
        const decks = client.db("Jizziby").collection("decks")
        const cartCollection = client.db("Jizziby").collection("cart")
        const commentsCollection = client.db("Jizziby").collection("comments")

        // All Products Section
        app.get('/allProducts', async (req, res) => {
            const query = {}
            const product = await allProducts.find(query).toArray()
            res.send(product)
        })

        app.get("/allProducts/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) }
            const product = await allProducts.findOne(query)
            res.send(product)
        })

        // Search Function

        app.get('/searchedItem', async (req, res) => {
            const search = req.query.search;
            let query = {}
            if (search.length) {
                query = {
                    $text: {
                        $search: search
                    }
                }
            }
            const result = await allProducts.find(query).toArray()
            res.send(result)
        })

        // Laptops Section
        app.get('/laptop', async (req, res) => {
            const query = {}
            const laptops = await laptopsCollection.find(query).toArray()
            res.send(laptops)
        })

        app.get("/laptop/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) }
            const laptop = await laptopsCollection.findOne(query)
            res.send(laptop)
        })

        // LaptopsBattery
        app.get('/laptopsBattery', async (req, res) => {
            const query = {}
            const laptops = await laptopsBatteries.find(query).toArray()
            res.send(laptops)
        })

        app.get("/laptopsBattery/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) }
            const laptop = await laptopsBatteries.findOne(query)
            res.send(laptop)
        })

        // Televisions
        app.get('/televisions', async (req, res) => {
            const query = {}
            const television = await televisions.find(query).toArray()
            res.send(television)
        })

        app.get("/televisions/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) }
            const television = await televisions.findOne(query)
            res.send(television)
        })

        // Phones
        app.get('/phones', async (req, res) => {
            const query = {}
            const phone = await phones.find(query).toArray()
            res.send(phone)
        })

        app.get("/phones/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) }
            const phone = await phones.findOne(query)
            res.send(phone)
        })

        // Tablets
        app.get('/tablets', async (req, res) => {
            const query = {}
            const tablet = await tablets.find(query).toArray()
            res.send(tablet)
        })

        app.get("/tablets/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) }
            const tablet = await tablets.findOne(query)
            res.send(tablet)
        })

        // smartWatches
        app.get('/smartWatches', async (req, res) => {
            const query = {}
            const smartWatch = await smartWatches.find(query).toArray()
            res.send(smartWatch)
        })

        app.get("/smartWatches/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) }
            const smartWatch = await smartWatches.findOne(query)
            res.send(smartWatch)
        })

        // gpus
        app.get('/gpus', async (req, res) => {
            const query = {}
            const GraphicsCard = await gpus.find(query).toArray()
            res.send(GraphicsCard)
        })

        app.get("/gpus/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) }
            const GraphicsCard = await gpus.findOne(query)
            res.send(GraphicsCard)
        })

        // headphones
        app.get('/headphones', async (req, res) => {
            const query = {}
            const headphone = await headphones.find(query).toArray()
            res.send(headphone)
        })

        app.get("/headphones/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) }
            const headphone = await headphones.findOne(query)
            res.send(headphone)
        })

        // Speakers Section
        app.get('/speakers', async (req, res) => {
            const query = {}
            const speaker = await speakers.find(query).toArray()
            res.send(speaker)
        })

        app.get("/speakers/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) }
            const singleSpeaker = await speakers.findOne(query)
            res.send(singleSpeaker)
        })

        // Earphones Section
        app.get('/earPhones', async (req, res) => {
            const query = {}
            const earPhone = await earPhones.find(query).toArray()
            res.send(earPhone)
        })

        app.get("/earPhones/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) }
            const earPhone = await earPhones.findOne(query)
            res.send(earPhone)
        })

        // Controllers Section
        app.get('/controllers', async (req, res) => {
            const query = {}
            const controller = await controllers.find(query).toArray()
            res.send(controller)
        })

        app.get("/controllers/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) }
            const controller = await controllers.findOne(query)
            res.send(controller)
        })

        // Consoles Section
        app.get('/consoles', async (req, res) => {
            const query = {}
            const console = await consoles.find(query).toArray()
            res.send(console)
        })

        app.get("/consoles/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) }
            const console = await consoles.findOne(query)
            res.send(console)
        })

        // Drones Section
        app.get('/drones', async (req, res) => {
            const query = {}
            const drone = await drones.find(query).toArray()
            res.send(drone)
        })

        app.get("/drones/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) }
            const drone = await drones.findOne(query)
            res.send(drone)
        })

        // decks Section
        app.get('/decks', async (req, res) => {
            const query = {}
            const deck = await decks.find(query).toArray()
            res.send(deck)
        })

        app.get("/decks/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) }
            const deck = await decks.findOne(query)
            res.send(deck)
        })

        // Cart Section
        app.get('/cart', async (req, res) => {
            const email = req.query.email
            const query = { email: email }
            const details = await cartCollection.find(query).toArray();
            res.send(details)
        })

        app.put("/cart/:email", async (req, res) => {
            const email = req.params.email;
            const filter = { email: email };
            const options = { upsert: true };
            const cartItem = req.body;
            const updatedCart = {
                $set: {
                    cart: cartItem
                }
            }
            const result = await cartCollection.updateOne(filter, updatedCart, options)
            res.send(result)
        })

        // User Comment Section
        app.get('/comments', async (req, res) => {
            const commentId = req.query.commentId
            const query = { commentId: commentId }
            const result = await commentsCollection.find(query).toArray()
            res.send(result)
        })

        app.post("/comments", async (req, res) => {
            const userComment = req.body
            const result = await commentsCollection.insertOne(userComment)
            res.send(result)
        })

    }
    finally {

    }
}
run().catch(err => console.error(err))


app.get("/", async (req, res) => {
    res.send("Jizziby Server is running Successfully")
})

app.listen(port, () => {
    console.log(`Server is running on Port ${port}`)
})