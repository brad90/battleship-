const assert = require('assert')
const BattleShip = require('../models/app.js')

describe('BattleShip', function(){
  let destroyer1
  let destroyer2
  let airCraftCarrier1
  let battleShip1
  let battleShip2
  let submarine

  beforeEach(function(){

    destroyer1 = new BattleShip("USS Lincoln", "destroyer", 3);
    destroyer2 = new BattleShip("USS Hilton", "destroyer", 3);
    airCraftCarrier1 = new BattleShip ("USS Theodore Rosavelt", "aircraft carrier", 5);
    battleShip1 = new BattleShip ("USS Teddy", "battleship", 4);
    battleShip2 = new BattleShip ("USS Hilary", "battleship", 4);
    submarine = new BattleShip ("USS Micheal", "submarine", 1);
  })


  it('should return the name of the battle ship', function(){

    const actual = destroyer1.name
    const expected = "USS Lincoln"
    assert.strictEqual(actual, expected)
  });

  it('should return the type of the ship', function(){
    const actual = destroyer1.type
    const expected = "destroyer"
    assert.strictEqual(actual, expected)
  });

  it('should return the size of the ship', function(){
    const actual = destroyer1.size
    const expected = 3
    assert.strictEqual(actual, expected)
  });

  it('should remove one of the spaces', function(){
    const actual = destroyer1.battleShipHit();
    const expected = 2;
    assert.strictEqual(actual, expected)
  });

  it('should return you sunk my battle ship', function(){
    const actual = submarine.battleShipHit();
    const expected = 0;
    assert.strictEqual(actual, expected)
  });

});
