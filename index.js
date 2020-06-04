const express = require('express');
const app = express();

app.use(express.json())

let Movie = require("./models/Movie")

app.get("/movies", function(req, res) {
    Movie.find({}).then(data => res.json(data))
})

app.post("/movies", function(req, res) {
    let movie = req.body
    res.send('post request')
})

app.listen(3000, () => {
    console.log('listening')
})