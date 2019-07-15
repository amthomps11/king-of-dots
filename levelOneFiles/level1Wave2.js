const arena = document.querySelector(".arena");
const heroAttributes = new Vector(250, 250);
const mainChar = new Hero(heroAttributes);

const baddies2 = [];

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
  badGuy.createEnemy("chaser");
  badGuy.renderEnemy();
  badGuy.setTargets();
  baddies2.push(badGuy);
}

runAllUpdates(baddies2);
setInterval(function() {
  if (baddies2.length === 0) {
    document.location.href = "level1Wave3.html";
  }
}, 100);
