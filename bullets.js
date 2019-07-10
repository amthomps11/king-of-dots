const Bullet = function(attributes) {
  this.x = attributes.x;
  this.y = attributes.y;
  this.divAt;

  this.createBullet = function() {
    let tempDiv = document.createElement("DIV");
    tempDiv.classList.add("bullet");
    this.divAt = tempDiv;
    arena.appendChild(this.divAt);
  };

  this.renderBullet = function() {
    this.divAt.style.top = this.y + "px";
    this.divAt.style.left = this.x + "px";
  };

  this.unRender = function() {
    this.divAt.parentNode.removeChild(this.divAt);
  };

  this.destroyBullet = function(heroChar) {
    heroChar.bullets.splice();
  };

  this.updateBulletPosition = function() {
    //Must Be refactored
    this.y += 50;
    if (this.y < 800) {
      this.renderBullet();
    }
  };
};
