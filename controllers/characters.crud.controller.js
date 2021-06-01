const mongoose = require('mongoose');
const CharactersModelMongoose = require('../models/characters.mongoose.model');

const DB = process.env.DATABASE_URL;

mongoose.connect(`${DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const addFavCharacter = (req , res) =>{
  const {name , gender , psiPowers , img , id} = req.body ;
  CharactersModelMongoose.find({id:id} , (error , character) => {
    if(character.length > 0)
      res.send('the character is already in the favorite list ');
    else{
      const newFavChar = new CharactersModelMongoose({
        name:name,
        gender:gender,
        psiPowers:psiPowers,
        img:img,
        id:id
      })
      newFavChar.save();
      res.send(newFavChar);
    }
  })
} ;

const getFavCharacters = (req , res) => {
  CharactersModelMongoose.find({} , (error , characters) => {
    res.send(characters);
  })
}

const deleteFavCharacter = (req , res) => {
  const id = req.params.id ;
  CharactersModelMongoose.findOneAndRemove({id:id} , (error , deletedChar) => {
    res.send(`the character has been deleted successfully  ${deletedChar}`);
  })
}

const updateFavChar = (req , res) => {
  const id = req.params.id ;
  const {name , gender} = req.body ;
  CharactersModelMongoose.find({id:id} , (error , favChar) => {
    favChar[0].name = name ;
    favChar[0].gender = gender ;
    favChar[0].save();
    res.send(favChar[0]);
  })
}




module.exports = {addFavCharacter , getFavCharacters , deleteFavCharacter , updateFavChar} ;