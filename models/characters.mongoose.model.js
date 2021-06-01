const mongoose = require('mongoose');


const Characters = new mongoose.Schema({
  name:String,
  gender:String,
  img:String,
  psiPowers:[{name:String}],
  id:{
    type:String,
    unique:true,
  }
}) ;

const CharactersModelMongoose = mongoose.model('characters' , Characters);

module.exports = CharactersModelMongoose ;