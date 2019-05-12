const  BattleShip = function(name, type, size){
  this.name = name;
  this.type = type;
  this.size = size;
}


const destroyer1 = new BattleShip("USS Lincoln", "destroyer", 3)
const destroyer2 = new BattleShip("USS Hilton", "destroyer", 3)
const airCraftCarrier1 = new BattleShip ("USS Theodore Rosavelt", "aircraft carrier", 5)
const battleShip1 = new BattleShip ("USS Teddy", "battleship", 4)
const battleShip2 = new BattleShip ("USS Hilary", "battleship", 4)
const submarine = new BattleShip ("USS Micheal", "submarine", 2)






console.log(destroyer1)
console.log(destroyer2)
console.log(airCraftCarrier1)
console.log(battleShip1)
console.log(battleShip2)
console.log(submarine)


BattleShip.prototype.battleShipHit = function () {
  if (this.size !== 0 ){
      return this.size -= 1}
  console.log("you sunk my battleship")
};


destroyer1.battleShipHit();
console.log(destroyer1);
destroyer1.battleShipHit();
console.log(destroyer1);
destroyer1.battleShipHit();
console.log(destroyer1);
destroyer1.battleShipHit();
console.log(destroyer1);


module.exports = BattleShip;
