const battleshipOcean = function(){

  this.verticalGrid  = {
    a:['1','2','3','4','5','6','7','8','9','10'],
    b:['1','2','3','4','5','6','7','8','9','10'],
    c:['1','2','3','4','5','6','7','8','9','10'],
    d:['1','2','3','4','5','6','7','8','9','10'],
    e:['1','2','3','4','5','6','7','8','9','10'],
    f:['1','2','3','4','5','6','7','8','9','10'],
    g:['1','2','3','4','5','6','7','8','9','10'],
    h:['1','2','3','4','5','6','7','8','9','10'],
    i:['1','2','3','4','5','6','7','8','9','10'],
    j:['1','2','3','4','5','6','7','8','9','10']
  };

  this.horizontalGrid = {
    1:['a','b','c','d','e','f','g','h','i','j'],
    2:['a','b','c','d','e','f','g','h','i','j'],
    3:['a','b','c','d','e','f','g','h','i','j'],
    4:['a','b','c','d','e','f','g','h','i','j'],
    5:['a','b','c','d','e','f','g','h','i','j'],
    6:['a','b','c','d','e','f','g','h','i','j'],
    7:['a','b','c','d','e','f','g','h','i','j'],
    8:['a','b','c','d','e','f','g','h','i','j'],
    9:['a','b','c','d','e','f','g','h','i','j'],
    10:['a','b','c','d','e','f','g','h','i','j'],
  };
};


const newBattleOcean = new battleshipOcean

console.log(newBattleOcean.verticalGrid);
console.log(newBattleOcean.horizontalGrid);

battleshipOcean.prototype.randomVerticalGrid = function(){
  const randomValue = Math.floor(Math.random() * 10 + 1)
  console.log(randomValue);
};

newBattleOcean.randomVerticalGrid()


module.exports = battleshipOcean;
