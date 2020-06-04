let mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/movies", {useNewUrlParser: true, useUnifiedTopology: true})

module.exports = mongoose

