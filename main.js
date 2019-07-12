const arena = document.querySelector(".arena");
const heroAttributes = new Vector(250, 250);
const mainChar = new Hero(heroAttributes);

mainChar.createHero();
mainChar.renderHero();

const enemyAttributes = new Vector(400, 250);
const badGuy = new Enemy(enemyAttributes);

badGuy.createEnemy();
badGuy.renderEnemy();

updateAllBulletPositions();
setInterval(() => {
  updateAllBulletPositions();
}, 100);

let testBullet = new Bullet(new Vector(0, 0), new Vector(0, 0));
testBullet.createBullet();
testBullet.renderBullet();
document.addEventListener("click", function(e) {
  testBullet.updateBulletPosition(new Vector(e.clientX, e.clientY));
  testBullet.renderBullet();
});
