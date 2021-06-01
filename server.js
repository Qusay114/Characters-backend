'use strict';

const express = require('express');
const cors = require('cors');
const superagent = require('superagent');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3080;

//middleware
app.use(cors());
app.use(express.json());
//controllers
const getCharacters = require('./controllers/getCharacters.controller');
const characters = require('./controllers/characters.crud.controller');


// API proof of life
app.get('/', (req, res) => {
    res.send('everything is working!')
});

//get 10 characters
app.get('/get-characters' , getCharacters );

//add new favorite character
app.post('/favorite' , characters.addFavCharacter);
//get favorite characters
app.get('/favorite' , characters.getFavCharacters);
//delete favorite character
app.delete('/favorite/:id' , characters.deleteFavCharacter);
//updat favorite character
app.put('/favorite/:id' , characters.updateFavChar);



app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});