const heroAttributes = { x: 100, y: 100 };
const mainChar = new Hero(heroAttributes);

const updateAllBulletPositions = function() {
  for (let i = mainChar.bullets.length - 1; i >= 0; i--) {
    mainChar.bullets[i].updateBulletPosition();
    if (mainChar.bullets[i].y > 800) {
      mainChar.bullets[i].unRender();
      mainChar.bullets.splice(i, 1);
    }
  }
};

mainChar.show();

setInterval(() => {
  updateAllBulletPositions();
}, 150);

const a = new Vector(300, 400);
const b = new Vector(400, 500);
console.log(a.calcDistance(b));
