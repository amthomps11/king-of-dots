const arena = document.querySelector(".arena");
const heroAttributes = new Vector(250, 250);
const mainChar = new Hero(heroAttributes);

const baddies1 = [];

const startingOscPostitions = [
  new Vector(0, 0),
  new Vector(500, 0),
  new Vector(500, 500),
  new Vector(0, 500)
];

const startingEndPositions = [
  new Vector(500, 0),
  new Vector(500, 500),
  new Vector(0, 500),
  new Vector(0, 0)
];

for (let i = 0; i < 4; i++) {
  let enemyPos = startingOscPostitions[i];
  let badGuy = new Enemy(enemyPos);
  badGuy.setEndVector(startingEndPositions[i]);
  badGuy.createEnemy("oscilator");
  badGuy.renderEnemy();
  badGuy.setTargets();
  baddies1.push(badGuy);
}

const baddies2 = [];

for (let i = 0; i < 4; i++) {
  let enemyPos = startingOscPostitions[i];
  let badGuy = new Enemy(enemyPos);
  baddies2.push(badGuy);
}

const baddies3 = [];

for (let i = 0; i < 4; i++) {
  let enemyPos = startingOscPostitions[i];
  let badGuy = new Enemy(enemyPos);

  baddies3.push(badGuy);
}

const allThebadguys = [baddies1, baddies2, baddies3];

runAllUpdates(allThebadguys);
setInterval(function() {
  if (baddies3.length === 0) {
    document.location.href = "../level1CutScene.html";
  }
}, 100);
