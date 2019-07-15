const arena = document.querySelector(".arena");
const heroAttributes = new Vector(250, 250);
const mainChar = new Hero(heroAttributes);

const baddies = [];

for (let i = 0; i < 5; i++) {
  const enemyPos = new Vector(generateRandomPos(), generateRandomPos());
  const badGuy = new Enemy(enemyPos);
  badGuy.createEnemy("oscilator");
  badGuy.renderEnemy();
  badGuy.setTargets();
  baddies.push(badGuy);
}

for (let i = 0; i < 5; i++) {
  const enemyPos = new Vector(generateRandomPos(), generateRandomPos());
  const badGuy = new Enemy(enemyPos);
  badGuy.createEnemy("chaotic");
  badGuy.renderEnemy();
  badGuy.setTargets();
  baddies.push(badGuy);
}

for (let i = 0; i < 5; i++) {
  const enemyPos = new Vector(generateRandomPos(), generateRandomPos());
  const badGuy = new Enemy(enemyPos);
  badGuy.createEnemy("chaser");
  badGuy.renderEnemy();
  badGuy.setTargets();
  baddies.push(badGuy);
}

runAllUpdates();
