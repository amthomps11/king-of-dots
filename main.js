const heroAttributes = new Vector(250, 250);
const mainChar = new Hero(heroAttributes);

mainChar.createHero();
mainChar.renderHero();

updateAllBulletPositions();
setInterval(() => {
  updateAllBulletPositions();
}, 100);
