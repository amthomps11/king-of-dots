let heroAttributes = { x: 100, y: 100 };
let mainChar = new Hero(heroAttributes);

let updateAllBulletPositions = function() {
  for (let i = mainChar.bullets.length - 1; i >= 0; i--) {
    mainChar.bullets[i].updateBulletPosition();
    if (mainChar.bullets[i].y > 800) {
      mainChar.bullets[i].unRender();
      mainChar.bullets.splice(i, 1);
    }
  }
};

mainChar.show();

setInterval(function() {
  updateAllBulletPositions();
}, 150);
