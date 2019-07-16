//Multi Key Movement sourced from blerf and https://www.kirupa.com/html5/keyboard_events_in_javascript.htm

const keys = [];
document.body.addEventListener("keydown", function(evt) {
  const keyCode = evt.keyCode;
  const arrowKeys = [37, 38, 39, 40];
  const WASD = [65, 87, 68, 83];
  keys[keyCode] = true;
  if (arrowKeys.includes(keyCode)) {
    evt.preventDefault();
  }
  if (keys[37]) {
    mainChar.moveLeft();
  }
  if (keys[38]) {
    mainChar.moveUp();
  }
  if (keys[39]) {
    mainChar.moveRight();
  }
  if (keys[40]) {
    mainChar.moveDown();
  }
});

document.body.addEventListener("keyup", function(evt) {
  const keyCode = evt.keyCode;
  const arrowKeys = [37, 38, 39, 40];
  const WASD = [65, 87, 68, 83];
  keys[keyCode] = false;
  if (arrowKeys.includes(keyCode)) {
    evt.preventDefault();
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
