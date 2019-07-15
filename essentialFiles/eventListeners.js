document.body.addEventListener("keydown", function(evt) {
  const keyCode = evt.keyCode;
  const arrowKeys = [37, 38, 39, 40];
  if (arrowKeys.includes(keyCode)) {
    evt.preventDefault();
  }
  switch (keyCode) {
    case 37:
    case 65:
      mainChar.moveLeft();
      break;
    case 38:
    case 87:
      mainChar.moveUp();
      break;
    case 39:
    case 68:
      mainChar.moveRight();
      break;
    case 40:
    case 83:
      mainChar.moveDown();
      break;
  }
});

document.addEventListener("click", function(evt) {
  evt.preventDefault();

  let currentPos = new Vector(
    mainChar.position.x + 10,
    mainChar.position.y + 10
  );
  let mousePos = new Vector(evt.clientX, evt.clientY);
  const tempBullet = new Bullet(currentPos, mousePos);
  tempBullet.createBullet();
  tempBullet.updateCenterPos();
  tempBullet.renderBullet();
  mainChar.bullets.push(tempBullet);

  updateAllBulletPositions();
  play();
});
