const express = require('express');
const mongoose = require('mongoose');   
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();


const app = express()
app.use(cors())
app.use(bodyParser.json())

const PORT = process.env.PORT

mongoose.connect(process.env.MONGOURL)
.then((res) => app.listen(PORT, () => {console.log("App running at", PORT)}))
.catch((err) => console.log(err))


const Entry = mongoose.model("Entry", {
    email: String
})

app.get("/", async (req, res) => {
    try {
        const data = await Entry.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
})


app.post("/join", async (req, res) => {
    try {
        await Entry.create(req.body)
        res.status(200).json("Joined Successfully!")
    } catch (error) {
        res.status(500).json(error)
    }
})