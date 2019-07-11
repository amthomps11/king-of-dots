const arena = document.querySelector(".arena");
const Hero = function(positionVector) {
  this.position = positionVector;
  this.div;
  this.bullets = [];

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

  this.moveDown = function() {
    if (this.position.y + 10 < 800) {
      this.position.y += 10;
      this.renderHero();
    }
  };
  this.moveLeft = function() {
    if (this.position.x - 10 >= 0) {
      this.position.x -= 10;
      this.renderHero();
    }
  };
  this.moveRight = function() {
    if (this.position.x + 10 <= 800) {
      this.position.x += 10;
      this.renderHero();
    }
  };
  this.moveUp = function() {
    if (this.position.y - 10 >= 0) {
      this.position.y -= 10;
      this.renderHero();
    }
  };
};
