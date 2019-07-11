const Bullet = function(posVector, targetVector) {
  this.position = posVector;
  this.targetVector = targetVector;
  this.direction = this.position.getUnitVectorTo(this.targetVector);
  this.div;

  this.createBullet = function() {
    const tempDiv = document.createElement("DIV");
    tempDiv.classList.add("bullet");
    this.div = tempDiv;
    this.renderBullet();
    arena.appendChild(this.div);
  };

  this.renderBullet = function() {
    this.div.style.top = `${this.position.y}px`;
    this.div.style.left = `${this.position.x}px`;
  };

  this.updateBulletPosition = function(vector) {
    this.position = vector;
  };

  this.moveBullet = function(x, y) {
    this.position.x = x;
    this.position.y = y;
  };

  this.getUniVectorToTarget = function() {
    this.direction = posVector.getUniVectorTo(this.targetVector);
  };
};

const updateAllBulletPositions = function() {
  for (let i = mainChar.bullets.length - 1; i >= 0; i--) {
    mainChar.bullets[i].renderBullet();
    let bulletPos = mainChar.bullets[i].position;
    let bulletTarget = mainChar.bullets[i].targetVector;
    let bulletDirection = mainChar.bullets[i].direction;
    bulletDirection.setMagnitude(100);
    bulletPos = addTwoVectors(bulletPos, bulletDirection);
    mainChar.bullets[i].updateBulletPosition(bulletPos);
    let currentX = parseInt(getComputedStyle(mainChar.bullets[i].div).left);
    let currentY = parseInt(getComputedStyle(mainChar.bullets[i].div).top);

    if (currentX > 600 || currentX < 0 || currentY > 600 || currentY < 0) {
      console.log();
      arena.removeChild(mainChar.bullets[i].div);
      mainChar.bullets.splice(i, 1);
    }
  }
};
