const Enemy = function(positionVector) {
  this.position = positionVector;
  this.radius = 50 / 2;
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
    let bulletX = parseInt(getComputedStyle(bullet.div).left);
    let bulletY = parseInt(getComputedStyle(bullet.div).top);
    let enemyX = parseInt(getComputedStyle(this.div).left);
    let enemyY = parseInt(getComputedStyle(this.div).top);
    let bulletCanvasVector = new Vector(bulletX, bulletY);
    let enemyCanvasVector = new Vector(enemyX, enemyY);
    let distanceToBullet = bulletCanvasVector.calcDistance(enemyCanvasVector);
    if (distanceToBullet < bullet.radius + this.radius) {
      this.div.style.backgroundColor = "green";
    }
    // else {
    //   this.div.style.backgroundColor = "red";
    // }
  };
};
