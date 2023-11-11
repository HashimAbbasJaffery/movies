const express = require('express');
const router = express.Router();
const Movie = require('../database/models/movie');

router.get('/', async (req, res) => {
    try {
    //   const items = await movie.find();
    //   res.json(items);
    console.log("lol")
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });


  router.get('/insert', async (req, res) => {
    try {
        const name = "kaka";
        const description = "lol";
        const genre = "anime";
        const image = null;
      if (!name || !description) {
        return res.status(400).json({ message: 'Name and description are required' });
      }
      const newMovie = new Movie({name, image, genre, description});
      await newMovie.save();
  
      res.status(201).json(newMovie);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  router.get('/movies', async (req, res) => {
    try {
      
      const whereName = req.query.name;
      const whereGenre = req.query.genre;

      const query = {};

      if(whereName) {
        query["name"] = { $regex: whereName }
      }

      if(whereGenre) {
        query["genre"] = {$regex: new RegExp(`^${whereGenre}$`, 'i')}
      }

      console.log(whereGenre);

      const movies = await Movie.find(query);
      res.json(movies);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });

  module.exports = router;
  