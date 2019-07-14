// const arena = document.querySelector(".arena");
// const heroAttributes = new Vector(250, 250);
// const mainChar = new Hero(heroAttributes);

// mainChar.createHero();
// mainChar.updateCenterPos();
// mainChar.renderHero();

// const enemyAttributes = new Vector(300, 300);
// const badGuy = new Enemy(enemyAttributes);

// badGuy.createEnemy();
// badGuy.renderEnemy();
// badGuy.updateCenterPos();

// let testBullet = new Bullet(new Vector(0, 0), new Vector(0, 0));

function areTheyColliding(obj1, obj2) {
  if (
    (obj1 instanceof Enemy && obj2 instanceof Bullet) ||
    (obj2 instanceof Enemy && obj1 instanceof Bullet)
  ) {
    // console.log("testing bullet and enemy");
    let tempEnemy;
    let tempBullet;
    if (obj1 instanceof Enemy) {
      tempEnemy = obj1;
      tempBullet = obj2;
    } else {
      tempEnemy = obj2;
      tempBullet = obj1;
    }

    let bulletCenter = new Vector(
      parseInt(getComputedStyle(tempBullet.div).left) + tempBullet.radius,
      parseInt(getComputedStyle(tempBullet.div).top) + tempBullet.radius
    );

    // let enemyCenter = tempEnemy.centerPos;
    let enemyCenter = new Vector(
      parseInt(getComputedStyle(tempEnemy.div).left) + tempEnemy.radius,
      parseInt(getComputedStyle(tempEnemy.div).top) + tempEnemy.radius
    );
    console.log(enemyCenter);

    let tempDistanceBetween = bulletCenter.calcDistance(enemyCenter);
    // console.log(tempDistanceBetween);
    if (tempDistanceBetween < tempBullet.radius + tempEnemy.radius) {
      return true;
    } else {
      return false;
    }
  } else if (
    (obj1 instanceof Enemy && obj2 instanceof Hero) ||
    (obj2 instanceof Enemy && obj1 instanceof Hero)
  ) {
    let tempEnemy;
    let tempHero;
    if (obj1 instanceof Enemy) {
      tempEnemy = obj1;
      tempHero = obj2;
    } else {
      tempEnemy = obj2;
      tempHero = obj1;
    }
    // let heroCenter = tempHero.centerPos;

    // let enemyCenter = tempEnemy.centerPos;
    let heroCenter = new Vector(
      parseInt(getComputedStyle(tempHero.div).left) + tempHero.radius,
      parseInt(getComputedStyle(tempHero.div).top) + tempHero.radius
    );

    let enemyCenter = new Vector(
      parseInt(getComputedStyle(tempEnemy.div).left) + tempEnemy.radius,
      parseInt(getComputedStyle(tempEnemy.div).top) + tempEnemy.radius
    );

    let tempDistanceBetween = heroCenter.calcDistance(enemyCenter);
    if (tempDistanceBetween < tempHero.radius + tempEnemy.radius) {
      console.log("colliide");
      return true;
    } else {
      return false;
    }
  }
}

function checkAllCollisions(hero, allBullets, allBaddies) {
  // let bulletsToBeRemoved = [];
  // let baddiesToBeRemoved = [];
  for (let i = 0; i < allBaddies.length; i++) {
    if (areTheyColliding(hero, allBaddies[i])) {
      console.log("hi");
    }

    for (let i = allBullets.length - 1; i >= 0; i--) {
      for (let j = allBaddies.length - 1; j >= 0; j--) {
        if (areTheyColliding(allBullets[i], allBaddies[j])) {
          console.log("asdfpoj");

          arena.removeChild(hero.bullets[i].div);
          hero.bullets.splice(i, 1);
          arena.removeChild(allBaddies[j].div);
          allBaddies.splice(j, 1);
        }
      }
    }
  }
}

// setInterval(function() {
//   if (areTheyColliding(mainChar, badGuy)) {
//     mainChar.div.style.backgroundColor = "red";
//   } else {
//     mainChar.div.style.backgroundColor = "white";
//   }

//   // for (i = 0; i < mainChar.bullets.length; i++) {
//   //   if (areTheyColliding(mainChar.bullets[i], badGuy)) {
//   //     badGuy.div.style.backgroundColor = "green";
//   //   } else {
//   //     badGuy.div.style.backgroundColor = "red";
//   //   }
//   // }
// }, 10);

function generateRandomPos() {
  return Math.floor(Math.random() * 600);
}
