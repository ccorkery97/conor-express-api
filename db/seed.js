let Movie = require("../models/Movie")
let data = require("./data.json")

data.results.forEach(movie => {
    Movie.create(movie).then(() => {
        console.log('Done')
        process.exit()
    })
})
