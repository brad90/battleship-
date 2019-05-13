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



NewGame.prototype.randomGridNumberVertical = function () {
  let gridLetters = ['a','b','c','d','e','f','g','h','i','j']
  const randomValue = Math.floor(Math.random() * 10 + 1)
  const randomLetter = gridLetters[randomValue -1 ]
  const coordinate =  randomLetter + randomValue;
  return coordinate;
};

NewGame.prototype.randomGridNumberHorizontal = function () {
  let gridLetters = ['a','b','c','d','e','f','g','h','i','j']
  const randomValue = Math.floor(Math.random() * 10 + 1)
  const randomLetter = gridLetters[randomValue -1 ]
  const coordinate = randomValue + randomLetter;
  return coordinate;
};


NewGame.prototype.assignShipsToCoordinates = function () {
  for(let i=0; i < theUSFleet.length; i++){

    let randomCoordinate = this.randomGridNumberVertical()
    let coordinateNumber = parseInt(randomCoordinate.slice(1))
    console.log(coordinateNumber);

    console.log(i.hitPoints);

    if ( coordinateNumber + theUSFleet[i].hitPoints < 10 ){
      assignedCoordinates.push(randomCoordinate)
    }

  }
}

const newGame1 =  new NewGame

// newBattleOcean.randomHorizontalGrid()
// newBattleOcean.randomVerticalGrid()
newGame1.randomGridNumberVertical();
newGame1.randomGridNumberHorizontal();
newGame1.assignShipsToCoordinates()

console.log(battleShip1);
console.log(destroyer1);
console.log(submarine);
console.log(aircraftCarrier);
console.log(assignedCoordinates);


module.exports = NewGame;
