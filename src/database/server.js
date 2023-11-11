const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require("../route/route");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;


app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

app.use(cors());

mongoose.connect('mongodb+srv://hashim_abbas:Oo2eSHgfWsPbpTnx@movies.wpsnmb0.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


app.use('/api/items', routes);