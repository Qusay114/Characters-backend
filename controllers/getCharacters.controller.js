const superagent = require('superagent');
const CharactersModel = require('../models/getCharacters.model')


const getCharacters = (req , res) => {
  const url = `https://psychonauts-api.herokuapp.com/api/characters?limit=10`;
  superagent.get(url).then(data => {
    const organizedData = data.body.map(data => new CharactersModel(data));
    res.send(organizedData);
  }).catch(error => res.send(error));
};

module.exports = getCharacters ;