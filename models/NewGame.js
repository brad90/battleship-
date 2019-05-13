const Battleship = require('./ships/battleShips.js')
const Destroyer = require('./ships/destroyer.js')
const Submarine = require('./ships/submarine.js')
const AircraftCarrier= require('./ships/aircraftCarrier.js')




const NewGame = function(){};


const battleShip1 = new Battleship();
const battleShip2 = new Battleship();
const destroyer1 = new Destroyer();
const destroyer2 = new Destroyer();
const submarine = new Submarine();
const aircraftCarrier = new AircraftCarrier();

const theUSFleet = [battleShip1, battleShip2, destroyer1, destroyer2, submarine, aircraftCarrier]
const assignedCoordinates =[];

NewGame.prototype.randomGridNumber = function () {
  const randomValue = Math.floor(Math.random() * 10 + 1)
  return randomValue;
};

NewGame.prototype.randomGridLetter = function () {
  let gridLetters = ['a','b','c','d','e','f','g','h','i','j']
  const randomValue = this.randomGridNumber();
  const randomLetter = gridLetters[randomValue -1 ]
  return randomLetter;
};

NewGame.prototype.assignNewCoordinatesToShip = function () {

  for(let i=0; i < theUSFleet.length; i++){

    let coordinateLetter = this.randomGridLetter()
    let coordinateNumber = this.randomGridNumber()

    let trueOrFalse = false

    while(trueOrFalse === false){

      if (coordinateNumber + theUSFleet[i].hitPoints < 10 ){

        let value = 0

        const lettersUsed = []
        lettersUsed.push(coordinateLetter)
        console.log(lettersUsed);


        while(value < theUSFleet[i].hitPoints ){
          const newCoordinate = coordinateLetter + coordinateNumber

          theUSFleet[i].coordinates.push(newCoordinate)
          coordinateNumber += 1
          value += 1
        }
      }
      trueOrFalse = true;
    }
  }
};


// NewGame.prototype.assignShipsToStartCoordinates = function () {
//
//   for(let i=0; i < theUSFleet.length; i++){
//
//     let coordinateLetter = this.randomGridLetter()
//     let coordinateNumber = this.randomGridNumber()
//     let shipCoordinateStart = coordinateLetter + coordinateNumber
//
//     if ( coordinateNumber + theUSFleet[i].hitPoints < 10 ){
//       theUSFleet[i].coordinates.push(shipCoordinateStart)
//     }
//   }
// };




const newGame1 =  new NewGame

// newBattleOcean.randomHorizontalGrid()
// newBattleOcean.randomVerticalGrid()
newGame1.randomGridNumber();
newGame1.randomGridLetter();
// newGame1.assignShipsToStartCoordinates();
// newGame1.createTheNextFewNumbers();
newGame1.assignNewCoordinatesToShip();

console.log(battleShip1);
console.log(battleShip2);
console.log(destroyer1);
console.log(destroyer2);
console.log(submarine);
console.log(aircraftCarrier);
console.log(assignedCoordinates);


module.exports = NewGame;
