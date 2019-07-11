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

  // let tempDiv = document.createElement("div");
  // tempDiv.classList.add("hero");
  // tempDiv.style.left = evt.clientX - 20 + "px";
  // tempDiv.style.top = evt.clientY - 12 + "px";
  // console.log(evt.clientX, evt.clientY);
  // console.log(tempDiv);
  // arena.appendChild(tempDiv);

  let mousePos = new Vector(evt.clientX + 10, evt.clientY + 10);
  const tempBullet = new Bullet(
    new Vector(mainChar.position.x, mainChar.position.y)
  );
  tempBullet.createBullet();
  tempBullet.target = mousePos;
  mainChar.bullets.push(tempBullet);
  // let targetVector = tempBullet.position.getUnitVectorTo(mousePos);
  // tempBullet.createBullet();
  // tempBullet.renderBullet();
  // console.log(tempBullet.position);
  // tempBullet.moveBullet(evt.clientX, evt.clientY);
  // tempBullet.position.resetMagnitude();
  // console.log(tempBullet.position);
  // tempBullet.renderBullet();
  // mainChar.bullets.push(tempBullet);

  //   console.log(mainChar.bullets);
});
