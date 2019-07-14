const arena = document.querySelector(".arena");
const heroAttributes = new Vector(250, 250);
const mainChar = new Hero(heroAttributes);

mainChar.createHero();
mainChar.updateCenterPos();
mainChar.renderHero();

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

updateAllBulletPositions();
checkAllCollisions(mainChar, mainChar.bullets, baddies);
setInterval(() => {
  updateAllBulletPositions();
  updateAllBaddies(baddies, mainChar);
  checkAllCollisions(mainChar, mainChar.bullets, baddies);
  if (baddies.length === 0) {
    //alert("you beat the level");
  }
  if (mainChar.health === 0) {
    // alert("you lose");
  }
}, 100);
