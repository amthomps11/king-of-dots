const Bullet = function(posVector) {
  this.position = posVector;
  this.target;
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
};
