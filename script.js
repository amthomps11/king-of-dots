let arena = document.querySelector(".arena");

const Hero = function(attributes) {
  this.x = attributes.x;
  this.y = attributes.y;
  this.divAt;

  this.move = function() {
    this.divAt.style.top = this.y + "px";
    this.divAt.style.left = this.x + "px";
  };

  this.show = function() {
    let tempDiv = document.createElement("DIV");
    tempDiv.classList.add("hero");
    tempDiv.style.top = this.y + "px";
    tempDiv.style.left = this.x + "px";
    this.divAt = tempDiv;
    arena.appendChild(this.divAt);
  };

  this.moveDown = function() {
    this.y += 20;
    this.move();
  };
  this.moveLeft = function() {
    this.x -= 20;
    this.move();
  };
  this.moveRight = function() {
    this.x += 20;
    this.move();
  };
  this.moveUp = function() {
    this.y -= 20;
    this.move();
  };
};

document.body.addEventListener("keydown", function(evt) {
  console.log("hello");
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

let heroAttributes = { x: 50, y: 50 };
let mainChar = new Hero(heroAttributes);

mainChar.show();
