let arena = document.querySelector(".arena");

const Hero = function(attributes) {
  this.x = attributes.x;
  this.y = attributes.y;
  this.divAt;
  this.bullets = [];

  this.move = function() {
    this.divAt.style.top = this.y + "px";
    this.divAt.style.left = this.x + "px";
  };

  this.loadGun = function() {
    console.log("x:" + this.x, "y:" + this.y);
    let bullet = new Bullet({ x: this.x, y: this.y });
    bullet.createBullet();
    bullet.renderBullet();
    this.bullets.push(bullet);
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
    if (this.y + 20 < 800) {
      this.y += 20;
      this.move();
    }
  };
  this.moveLeft = function() {
    if (this.x - 20 >= 0) {
      this.x -= 20;
      this.move();
    }
  };
  this.moveRight = function() {
    if (this.x + 20 <= 800) {
      this.x += 20;
      this.move();
    }
  };
  this.moveUp = function() {
    if (this.y - 20 >= 0) {
      this.y -= 20;
      this.move();
    }
  };
};

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

  this.updateBulletPosition = function() {
    this.x += 5;
    this.y += 5;
    this.renderBullet();
  };
};

document.body.addEventListener("keydown", function(evt) {
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

document.addEventListener("keydown", function(evt) {
  const keyCode = evt.keyCode;
  if (32 === keyCode) {
    evt.preventDefault();
    mainChar.loadGun();
  }
});

let heroAttributes = { x: 100, y: 100 };
let mainChar = new Hero(heroAttributes);

let updateAllBulletPositions = function() {
  for (let i = 0; i < mainChar.bullets.length; i++) {
    mainChar.bullets[i].updateBulletPosition();
  }
};

mainChar.show();
mainChar.loadGun();
mainChar.bullets[0].renderBullet();
setInterval(function() {
  updateAllBulletPositions();
}, 150);

// mainChar.loadGun();
// mainChar.bullets[0].show();

// let updateBullets = function() {
//   for (let i = 0; i < mainChar.bullets.length; i++) {
//     mainChar.bullets[i].show();
//     //mainChar.bullets[i].move();
//   }
// };

// setInterval(updateBullets, 150);
