const arena = document.querySelector('.arena');
const Hero = function (attributes) {
  this.x = attributes.x;
  this.y = attributes.y;
  this.divAt;
  this.bullets = [];

  this.move = function () {
    this.divAt.style.top = `${this.y}px`;
    this.divAt.style.left = `${this.x}px`;
  };

  this.loadGun = function (vector) {
    const bullet = new Bullet({ x: this.x, y: this.y });
    bullet.createBullet();
    bullet.renderBullet();
    this.bullets.push(bullet);
  };

  this.show = function () {
    const tempDiv = document.createElement('DIV');
    tempDiv.classList.add('hero');
    tempDiv.style.top = `${this.y}px`;
    tempDiv.style.left = `${this.x}px`;
    this.divAt = tempDiv;
    arena.appendChild(this.divAt);
  };

  this.moveDown = function () {
    if (this.y + 20 < 800) {
      this.y += 20;
      this.move();
    }
  };
  this.moveLeft = function () {
    if (this.x - 20 >= 0) {
      this.x -= 20;
      this.move();
    }
  };
  this.moveRight = function () {
    if (this.x + 20 <= 800) {
      this.x += 20;
      this.move();
    }
  };
  this.moveUp = function () {
    if (this.y - 20 >= 0) {
      this.y -= 20;
      this.move();
    }
  };
};

document.body.addEventListener('keydown', (evt) => {
  const { keyCode } = evt;
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

document.addEventListener('click', (evt) => {
  evt.preventDefault();
  console.log(evt.screenX);
  console.log(evt.screenY);

  const mouseBullet = new Vector(screenX, screenY);

  mainChar.loadGun(mouseBullet);
});
