const Enemy = function(positionVector) {
  this.position = positionVector;
  this.centerPos = new Vector(
    this.position.x + this.radius,
    this.position.y + this.radius
  );
  this.centerPos;
  this.radius = 25;
  this.div;

  this.createEnemy = function() {
    const tempDiv = document.createElement("DIV");
    tempDiv.classList.add("enemy");
    this.div = tempDiv;
    arena.appendChild(this.div);
  };

  this.renderEnemy = function() {
    this.div.style.top = `${this.position.y}px`;
    this.div.style.left = `${this.position.x}px`;
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
