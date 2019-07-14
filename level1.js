const arena = document.querySelector(".arena");
const heroAttributes = new Vector(250, 250);
const mainChar = new Hero(heroAttributes);

mainChar.createHero();
mainChar.updateCenterPos();
mainChar.renderHero();

const baddies = [];

for (let i = 0; i < 1; i++) {
  //   const enemyPos = new Vector(generateRandomPos(), generateRandomPos());
  const enemyPos = new Vector(500, 250);
  const enemyTarg = new Vector(mainChar.position.x, mainChar.position.y);
  const badGuy = new Enemy(enemyPos, enemyTarg);
  badGuy.updateCenterPos();
  badGuy.createEnemy();
  badGuy.updateCenterPos();
  badGuy.renderEnemy();
  baddies.push(badGuy);
}

updateAllBulletPositions();
checkAllCollisions(mainChar, mainChar.bullets, baddies);
setInterval(() => {
  updateAllBulletPositions();
  //   updateAllBaddies(baddies);
  checkAllCollisions(mainChar, mainChar.bullets, baddies);
  baddies[0].updateEnemyPosition(new Vector(0, 250));

  //   for (let i = 0; i < baddies.length; i++) {
  //     baddies[i].setDirection(mainChar);
  //   }
}, 100);

// setTimeout(function() {
//   baddies[0].updateEnemyPosition(new Vector(0, 250));
// }, 2000);
