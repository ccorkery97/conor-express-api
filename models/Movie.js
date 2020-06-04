let mongoose = require("../db/connection")

let Movie = new mongoose.Schema({
    title: String,
    poster_path: String,
    overview: String,
    release_date: String
})

module.exports = mongoose.model("Movie", Movie)