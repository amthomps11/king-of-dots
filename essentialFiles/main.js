const enemyTypes = {
  chaotic: "chaotic",
  chaser: "chaser",
  oscilator: "oscilator",
  targeter: "targeter"
};

const enemyTypesArray = ["oscilator", "chaser", "chaotic"];

function areTheyColliding(obj1, obj2) {
  if (
    (obj1 instanceof Enemy && obj2 instanceof Bullet) ||
    (obj2 instanceof Enemy && obj1 instanceof Bullet)
  ) {
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

    let enemyCenter = new Vector(
      parseInt(getComputedStyle(tempEnemy.div).left) + tempEnemy.radius,
      parseInt(getComputedStyle(tempEnemy.div).top) + tempEnemy.radius
    );

    let tempDistanceBetween = bulletCenter.calcDistance(enemyCenter);
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
      tempHero.health--;

      if (tempHero.health === 0) {
        alert("game over");
      }
      return true;
    } else {
      return false;
    }
  }
}
function updateHUD(HUD) {
  HUD.innerHTML = mainChar.health;
}

function checkAllCollisions(hero, allBullets, allBaddies) {
  for (let i = 0; i < allBaddies.length; i++) {
    if (areTheyColliding(hero, allBaddies[i])) {
      console.log(hero.health);
      hero.health--;
      updateHUD(HUD);
    }

    for (let i = allBullets.length - 1; i >= 0; i--) {
      for (let j = allBaddies.length - 1; j >= 0; j--) {
        if (areTheyColliding(allBullets[i], allBaddies[j])) {
          arena.removeChild(hero.bullets[i].div);
          hero.bullets.splice(i, 1);
          arena.removeChild(allBaddies[j].div);
          allBaddies.splice(j, 1);
        }
      }
    }
  }
}

function generateRandomPos() {
  return Math.floor(Math.random() * 600);
}

let runAllUpdates = function(badguys) {
  let runWave;
  let currentBadGuyIndex = 0;
  updateAllBulletPositions();
  checkAllCollisions(mainChar, mainChar.bullets, badguys[currentBadGuyIndex]);
  runWave = setInterval(() => {
    console.log(badguys[currentBadGuyIndex].length);
    updateAllBulletPositions();
    updateAllBaddies(badguys[currentBadGuyIndex], mainChar);
    checkAllCollisions(mainChar, mainChar.bullets, badguys[currentBadGuyIndex]);
    if (badguys[currentBadGuyIndex].length === 0) {
      currentBadGuyIndex++;
      renderAllEnemies(
        badguys[currentBadGuyIndex],
        enemyTypesArray[currentBadGuyIndex]
      );
      if (currentBadGuyIndex > badguys.length) {
        clearInterval(runWave);
      }
    }
  }, 100);
};

function play() {
  var audio = document.getElementById("audio");
  audio.play();
}

function renderAllEnemies(baddies, type) {
  for (let i = 0; i < baddies.length; i++) {
    baddies[i].createEnemy(type);
    // baddies[i].renderEnemy();
  }
}
