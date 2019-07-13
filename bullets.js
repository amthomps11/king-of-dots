const Bullet = function(posVector, targetVector) {
  this.position = posVector;
  this.targetVector = targetVector;
  this.radius = 5;
  this.centerPos = new Vector(
    this.position.x + this.radius,
    this.position.y + this.radius
  );
  // this.direction = this.position.getUnitVectorTo(this.targetVector);
  this.direction = new Vector(1, 0);
  this.div;

  this.updateCenterPos = function() {
    this.centerPos = new Vector(
      this.position.x + this.radius,
      this.position.y + this.radius
    );
  };

  this.createBullet = function() {
    const tempDiv = document.createElement("DIV");
    tempDiv.classList.add("bullet");
    this.div = tempDiv;
    this.div.style.width = `${this.radius * 2}px`;
    this.div.style.height = `${this.radius * 2}px`;

    this.renderBullet();
    arena.appendChild(this.div);
  };

  this.renderBullet = function() {
    this.div.style.top = `${this.position.y}px`;
    this.div.style.left = `${this.position.x}px`;
  };

  this.updateBulletPosition = function(vector) {
    this.position = vector;
    this.updateCenterPos();
  };

  this.getUniVectorToTarget = function() {
    this.direction = posVector.getUniVectorTo(this.targetVector);
  };
};

const updateAllBulletPositions = function() {
  for (let i = mainChar.bullets.length - 1; i >= 0; i--) {
    console.log(i);
    let bulletPos = mainChar.bullets[i].position;
    let bulletTarget = mainChar.bullets[i].targetVector;
    let bulletDirection = mainChar.bullets[i].direction;

    bulletDirection.setMagnitude(50);
    bulletPos = addTwoVectors(bulletPos, bulletDirection);
    mainChar.bullets[i].updateBulletPosition(bulletPos);
    let currentX = parseInt(getComputedStyle(mainChar.bullets[i].div).left);
    let currentY = parseInt(getComputedStyle(mainChar.bullets[i].div).top);
    if (currentX > 600 || currentX < 0 || currentY > 600 || currentY < 0) {
      arena.removeChild(mainChar.bullets[i].div);
      mainChar.bullets.splice(i, 1);
    }
    if (areTheyColliding(mainChar.bullets[i], badGuy)) {
      badGuy.div.style.backgroundColor = "blue";
      arena.removeChild(mainChar.bullets[i].div);
      mainChar.bullets.splice(i, 1);
    } else {
      badGuy.div.style.backgroundColor = "red";
    }
    mainChar.bullets[i].renderBullet();
  }
};
