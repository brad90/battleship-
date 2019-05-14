const assert = require('assert')
const BattleShip = require('../models/ships/battleShips.js')
const BattleShipOcean = require('../models/newGame.js')

describe('BattleShip', function(){
  let battleShip


  beforeEach(function(){
    battleShip = new BattleShip("Battleship",3);
  })


  it('should return the type of the ship', function(){
    const actual = battleShip.type;
    const expected = "Battleship";
    assert.strictEqual(actual, expected)
  });

  it('should return the size of the ship', function(){
    const actual = battleShip.hitPoints;
    const expected = 3;
    assert.strictEqual(actual, expected);
  });

  it('should remove one of the spaces', function(){
    const actual = battleShip.succesfulHitToShip();
    const expected = 2;
    assert.strictEqual(actual, expected)
  });

});
