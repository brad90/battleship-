const  BattleShip = function(){
  this.type = "BattleShip"
  this.hitPoints = 3,
  this.coordinates = []
}


const battleShip = new BattleShip



BattleShip.prototype.succesfulHitToShip = function () {

  if (this.hitPoints !== 0 ){
      return this.hitPoints -= 1}
  console.log("you sunk my battleship")
};





battleShip.succesfulHitToShip();
console.log(battleShip);
battleShip.succesfulHitToShip();
console.log(battleShip);
battleShip.succesfulHitToShip();
console.log(battleShip);



module.exports = BattleShip;
