
class FilteredData {
  constructor(data){
    this.name = data.name;
    this.img = data.img
  }
}
class CharactersModel {
  constructor(data){
    this.name = data.name ;
    this.gender = data.gender ;
    this.img = data.img ;
    const filteredPowers = data.psiPowers.map(data => new FilteredData(data) );
    this.psiPowers = filteredPowers ;
    this.id = data["_id"]
  }
}


module.exports = CharactersModel ;