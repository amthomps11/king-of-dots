const arena = document.querySelector(".arena");
const heroAttributes = new Vector(250, 250);
const mainChar = new Hero(heroAttributes);

const baddies3 = [];

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
  badGuy.createEnemy("chaotic");
  badGuy.renderEnemy();
  badGuy.setTargets();
  baddies3.push(badGuy);
}

runAllUpdates(baddies3);
