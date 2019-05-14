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
let assignedCoordinates =[];

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

// NewGame.prototype.assignNewCoordinatesToShipVertical = function () {
//   let alreadyAssignedLetters = []
//   let letters = ['a','b','c','d','e','f','g','h','i','j']
//
//   for(let i=0; i < theUSFleet.length; i++){
//     if(i%2 !== 0){
//
//       let trueOrFalse = false
//
//       while(trueOrFalse === false){
//
//         let coordinateLetter = letters[this.randomGridNumber() -1]
//         let coordinateNumber = this.randomGridNumber()
//         let newCoordinate = coordinateLetter + coordinateNumber
//
//         if (coordinateNumber + theUSFleet[i].hitPoints < 10 && alreadyAssignedLetters.includes(newCoordinate) === false){
//
//           alreadyAssignedLetters.push(coordinateLetter)
//           trueOrFalse = true;
//           let value = 0
//
//           while(value < theUSFleet[i].hitPoints ){
//             newCoordinate = coordinateLetter + coordinateNumber
//             theUSFleet[i].coordinates.push(newCoordinate)
//             assignedCoordinates.push(newCoordinate)
//             coordinateNumber += 1
//             value += 1
//
//           }
//         }
//       }
//     }
//   }
//   console.log('test:',assignedCoordinates);
// };
//













NewGame.prototype.assignNewCoordinatesToShipVertical = function(){

  let letters = ['a','b','c','d','e','f','g','h','i','j']


  for(let i=0; i < theUSFleet.length; i++){
    let alreadyAssignedLetters = []
    let alreadyAssignedNumbers = []

    if (i%2 === 0){

      let trueOrFalse = false

      while(trueOrFalse === false){


        let coordinateLetterVertical = letters[this.randomGridNumber() -1]
        let coordinateNumberVertical = this.randomGridNumber()
        let newCoordinateVertical = coordinateLetterVertical + coordinateNumberVertical


        if (coordinateNumberVertical + theUSFleet[i].hitPoints < 10 && assignedCoordinates.includes(newCoordinateVertical) === false){

          alreadyAssignedLetters.push(coordinateLetterVertical)
          let value = 0

          while(value < theUSFleet[i].hitPoints ){
            newCoordinateVertical = coordinateLetterVertical + coordinateNumberVertical

            theUSFleet[i].coordinates.push(newCoordinateVertical)
            assignedCoordinates.push(newCoordinateVertical)
            coordinateNumberVertical += 1
            value += 1

          }
          trueOrFalse = true;

        }
      }
    }else{
      let falseOrTrue = false

      while(falseOrTrue === false){

        let coordinateLetterHorizontal = letters[this.randomGridNumber() -1]
        let coordinateNumberHorizontal = this.randomGridNumber()
        let indexOfLetterHorizontal = letters.indexOf(coordinateLetterHorizontal)
        let newCoordinateHorizontal = letters[indexOfLetterHorizontal] + coordinateNumberHorizontal


        if (indexOfLetterHorizontal + theUSFleet[i].hitPoints < 10 && assignedCoordinates.includes(newCoordinateHorizontal) === false){
          alreadyAssignedNumbers.push(coordinateNumberHorizontal)
          falseOrTrue = true;
          let value = 0

          while(value < theUSFleet[i].hitPoints ){
            newCoordinateHorizontal = letters[indexOfLetterHorizontal] + coordinateNumberHorizontal
            theUSFleet[i].coordinates.push(newCoordinateHorizontal)
            assignedCoordinates.push(newCoordinateHorizontal)
            indexOfLetterHorizontal += 1
            value += 1
          }
        }
      }
    }
  }
};




NewGame.prototype.checkifthereAreDoubles = function () {

  let value = false

  while(value === false){


    for(i=0; i < assignedCoordinates.length; i++){
      if(assignedCoordinates.includes(assignedCoordinates[i + 1])===false){
        value = true
      }

    }
    assignedCoordinates = []
    this.assignNewCoordinatesToShipVertical()
  }
  console.log(assignedCoordinates);
}






















// NewGame.prototype.assignNewCoordinatesToShiphorizontal = function () {
//   let alreadyAssignedNumbers = []
//   let letters = ['a','b','c','d','e','f','g','h','i','j']
//
//   for(let i=0; i < theUSFleet.length; i++){
//     if(i%2 === 0){
//       let trueOrFalse = false
//
//       while(trueOrFalse === false){
//
//         let coordinateLetter = letters[this.randomGridNumber() -1]
//         let coordinateNumber = this.randomGridNumber()
//         let indexOfLetter = letters.indexOf(coordinateLetter)
//         let newCoordinate =  letters[indexOfLetter] + coordinateNumber
//
//
//         if (indexOfLetter + theUSFleet[i].hitPoints < 10 && assignedCoordinates.includes(newCoordinate) === false){
//
//           alreadyAssignedNumbers.push(coordinateNumber)
//           trueOrFalse = true;
//
//           let value = 0
//
//           while(value < theUSFleet[i].hitPoints ){
//             newCoordinate = letters[indexOfLetter] + coordinateNumber
//             theUSFleet[i].coordinates.push(newCoordinate)
//             assignedCoordinates.push(newCoordinate)
//             indexOfLetter += 1
//             value += 1
//
//           }
//         }
//       }
//     }
//   }
// };




const newGame1 =  new NewGame

// newBattleOcean.randomHorizontalGrid()
// newBattleOcean.randomVerticalGrid()
// newGame1.randomGridNumber();
// newGame1.randomGridLetter();
// newGame1.assignShipsToStartCoordinates();
// newGame1.createTheNextFewNumbers();
// newGame1.assignNewCoordinatesToShipVertical();
// newGame1.assignNewCoordinatesToShiphorizontal();
// newGame1.assignShips();
// newGame1.assignNewCoordinatesToShipVertical();
newGame1.checkifthereAreDoubles();




module.exports = NewGame;
