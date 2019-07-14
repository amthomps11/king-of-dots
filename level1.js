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

  //   badGuy.updateCenterPos();
  badGuy.createEnemy("oscilator");
  badGuy.renderEnemy();
  badGuy.setTargets();

  baddies.push(badGuy);
}

updateAllBulletPositions();
checkAllCollisions(mainChar, mainChar.bullets, baddies);
setInterval(() => {
  updateAllBulletPositions();
  updateAllBaddies(
    baddies,
    new Vector(generateRandomPos(), generateRandomPos())
  );
  checkAllCollisions(mainChar, mainChar.bullets, baddies);

  //   for (let i = 0; i < baddies.length; i++) {
  //     baddies[i].setDirection(mainChar);
  //   }
}, 100);

// setTimeout(function() {
//   baddies[0].updateEnemyPosition(new Vector(0, 250));
// }, 2000);
