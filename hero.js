const Hero = function(positionVector) {
  this.position = positionVector;
  this.centerPos = new Vector(
    positionVector.x + this.radius,
    positionVector.y + this.radius
  );
  this.div;
  this.bullets = [];
  this.radius = 12.5;
  this.health = 3;

  this.createHero = function() {
    const tempDiv = document.createElement("DIV");
    tempDiv.classList.add("hero");
    this.div = tempDiv;
    arena.appendChild(this.div);
  };

  this.renderHero = function() {
    this.div.style.top = `${this.position.y}px`;
    this.div.style.left = `${this.position.x}px`;
  };

  this.updateCenterPos = function() {
    this.centerPos = new Vector(
      this.position.x + this.radius,
      this.position.y + this.radius
    );
  };

  this.moveDown = function() {
    if (this.position.y + this.radius * 2 < 600) {
      this.position.y += 10;
      this.updateCenterPos();
      this.renderHero();
    }
  };
  this.moveLeft = function() {
    if (this.position.x - 10 >= 0) {
      this.position.x -= 10;
      this.updateCenterPos();

      this.renderHero();
    }
  };
  this.moveRight = function() {
    if (this.position.x < 600 - this.radius * 2) {
      this.position.x += 10;
      this.updateCenterPos();
      this.renderHero();
    }
  };
  this.moveUp = function() {
    if (this.position.y - this.radius / 2 >= 0) {
      this.position.y -= 10;
      this.updateCenterPos();
      this.renderHero();
    }
  };

  this.isHit = function(enemy) {};
};
