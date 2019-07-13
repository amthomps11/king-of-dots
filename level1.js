const arena = document.querySelector(".arena");
const heroAttributes = new Vector(250, 250);
const mainChar = new Hero(heroAttributes);

mainChar.createHero();
mainChar.updateCenterPos();
mainChar.renderHero();

const baddies = [];

for (let i = 0; i < 10; i++) {
  const enemyAttributes = new Vector(300, 300);
  const badGuy = new Enemy(enemyAttributes);
  badGuy.createEnemy();
  badGuy.updateCenterPos();
  badGuy.renderEnemy();
}

updateAllBulletPositions();
setInterval(() => {
  updateAllBulletPositions();
}, 100);

setInterval(function() {
  if (areTheyColliding(mainChar, badGuy)) {
    mainChar.div.style.backgroundColor = "red";
  } else {
    mainChar.div.style.backgroundColor = "white";
  }
}, 10);
