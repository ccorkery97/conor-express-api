const express = require('express');
const app = express();
const cors = require('cors')

app.use(express.json())
app.use(cors())

let Movie = require("./models/Movie")

app.get("/movies", function(req, res) {
    Movie.find({}).then(data => res.json(data))
})

app.post("/movies", function(req, res) {
    let movie = req.body
    Movie.create(movie).then(movie => res.json(movie)).catch(error => console.log(error))
})

app.put('/movies/:id', function (req, res) {
    let id = req.params.id
    Movie.findByIdAndUpdate(id, {$set: req.body}).then(movie => res.json(movie)).catch(error => console.log(error))
})
  
app.delete('/movies/:id', function (req, res) {
    let id = req.params.id
    Movie.findByIdAndDelete(id).then(movie => res.json(movie)).catch(error => console.log(error))
})

app.listen(3000, () => {
    console.log('listening')
})

