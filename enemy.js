const Enemy = function(positionVector, targetVector) {
  this.position = positionVector;
  this.targetVector = targetVector;
  this.centerPos = new Vector(
    this.position.x + this.radius,
    this.position.y + this.radius
  );
  this.direction = this.position.getUnitVectorTo(this.targetVector);

  this.radius = 25;
  this.div;

  this.createEnemy = function() {
    const tempDiv = document.createElement("DIV");
    tempDiv.classList.add("enemy");
    tempDiv.style.height = this.radius * 2 + "px";
    tempDiv.style.width = this.radius * 2 + "px";

    this.div = tempDiv;
    arena.appendChild(this.div);
  };

  this.updateEnemyPosition = function(vector) {
    this.position = vector;
    this.updateCenterPos();
    this.renderEnemy();
  };

  this.updateCenterPos = function() {
    this.centerPos = new Vector(
      this.position.x + this.radius,
      this.position.y + this.radius
    );
  };

  this.renderEnemy = function() {
    this.div.style.top = `${this.position.y}px`;
    this.div.style.left = `${this.position.x}px`;
  };

  this.setDirection = function(vector) {
    this.direction = vector;
  };

  this.isShot = function(bullet) {
    let bulletX = parseInt(getComputedStyle(bullet.div).left + bullet.radius);
    let bulletY = parseInt(getComputedStyle(bullet.div).top + bullet.radius);
    let enemyX = parseInt(getComputedStyle(this.div).left + this.radius);
    let enemyY = parseInt(getComputedStyle(this.div).top + this.radius);
    let bulletCanvasVector = new Vector(bulletX, bulletY);
    let enemyCanvasVector = new Vector(enemyX, enemyY);
    let distanceToBullet = bulletCanvasVector.calcDistance(enemyCanvasVector);
    if (distanceToBullet < this.radius + bullet.radius) {
      this.div.style.backgroundColor = "green";
    } else {
      this.div.style.backgroundColor = "red";
    }
  };
};

const updateAllBaddies = function(baddies) {
  for (let i = mainChar.bullets.length - 1; i >= 0; i--) {
    let bulletPos = baddies[i].position;
    let bulletTarget = baddies[i].targetVector;
    let bulletDirection = baddies[i].direction;
    bulletDirection.setMagnitude(10);
    bulletPos = addTwoVectors(bulletPos, bulletDirection);
    baddies[i].updateEnemyPosition(bulletPos);

    let currentX = parseInt(getComputedStyle(baddies[i].div).left);
    let currentY = parseInt(getComputedStyle(baddies[i].div).top);

    // if (areTheyColliding(baddies[i], badGuy)) {
    //   badGuy.div.style.backgroundColor = "blue";
    //   arena.removeChild(baddies[i].div);
    //   baddies.splice(i, 1);
    // } else {
    //   badGuy.div.style.backgroundColor = "red";
    // }
    baddies[i].renderEnemy();
  }
};
