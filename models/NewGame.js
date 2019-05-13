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

NewGame.prototype.assignNewCoordinatesToShipVertical = function () {
  let alreadyAssignedLetters = []
  let letters = ['a','b','c','d','e','f','g','h','i','j']

  for(let i=0; i < theUSFleet.length; i++){
    if(i%2 !== 0){

      let trueOrFalse = false

      while(trueOrFalse === false){

        let coordinateLetter = letters[this.randomGridNumber() -1]
        let coordinateNumber = this.randomGridNumber()

        if (coordinateNumber + theUSFleet[i].hitPoints < 10 && alreadyAssignedLetters.includes(coordinateLetter) === false){

          alreadyAssignedLetters.push(coordinateLetter)
          trueOrFalse = true;
          let value = 0

          while(value < theUSFleet[i].hitPoints ){
            const newCoordinate = coordinateLetter + coordinateNumber

            theUSFleet[i].coordinates.push(newCoordinate)
            coordinateNumber += 1
            value += 1
          }
        }
      }
    }
  }
};

NewGame.prototype.assignNewCoordinatesToShiphorizontal = function () {
  let alreadyAssignedNumbers = []
  let letters = ['a','b','c','d','e','f','g','h','i','j']

  for(let i=0; i < theUSFleet.length; i++){
    if(i%2 === 0){
      let trueOrFalse = false

      while(trueOrFalse === false){

        let coordinateLetter = letters[this.randomGridNumber() -1]
        let coordinateNumber = this.randomGridNumber()
        let indexOfLetter = letters.indexOf(coordinateLetter)
        console.log(indexOfLetter);

        if (indexOfLetter + theUSFleet[i].hitPoints < 10 && alreadyAssignedNumbers.includes(coordinateNumber) === false){

          alreadyAssignedNumbers.push(coordinateNumber)
          trueOrFalse = true;

          let value = 0

          while(value < theUSFleet[i].hitPoints ){
            const newCoordinate = coordinateNumber + letters[indexOfLetter]

            theUSFleet[i].coordinates.push(newCoordinate)
            indexOfLetter += 1
            value += 1
          }
        }
      }
    }
  }
};




NewGame.prototype.assignShips = function () {

  const horizontal = this.assignNewCoordinatesToShiphorizontal()
  const vertical = this.assignNewCoordinatesToShipVertical()}



  const newGame1 =  new NewGame

  // newBattleOcean.randomHorizontalGrid()
  // newBattleOcean.randomVerticalGrid()
  newGame1.randomGridNumber();
  newGame1.randomGridLetter();
  // newGame1.assignShipsToStartCoordinates();
  // newGame1.createTheNextFewNumbers();
  // newGame1.assignNewCoordinatesToShipVertical();
  // newGame1.assignNewCoordinatesToShiphorizontal();
  newGame1.assignShips();

  console.log(battleShip1);
  console.log(battleShip2);
  console.log(destroyer1);
  console.log(destroyer2);
  console.log(submarine);
  console.log(aircraftCarrier);
  console.log(assignedCoordinates);


  module.exports = NewGame;
