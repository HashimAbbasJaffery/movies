const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name: String,
    image: { type: String, required: false },
    genre: String,
    description: String
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
