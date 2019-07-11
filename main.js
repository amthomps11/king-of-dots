const heroAttributes = new Vector(500, 500);
const mainChar = new Hero(heroAttributes);

mainChar.createHero();
mainChar.renderHero();

const updateAllBulletPositions = function() {
  for (let i = mainChar.bullets.length - 1; i >= 0; i--) {
    // console.log(mainChar.bullets[i]);
    mainChar.bullets[i].renderBullet();
    mainChar.bullets[i].updateBulletPosition(mainChar.bullets[i].target);
    // if (mainChar.bullets[i].y > 800) {
    //   mainChar.bullets[i].unRender();
    //   mainChar.bullets.splice(i, 1);
    // }
  }
};

setInterval(() => {
  updateAllBulletPositions();
}, 150);
