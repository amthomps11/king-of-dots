# title
King Of Dots

**domain**: - insert the domain to your project

## description and user story
A simple point and click shooter while controlling your character on the screen with arrow keys or WASD
I did this because in corporated everything we learned so far.


## technologies & packages
Only JavaScript, CSS, and HTML


## major problems & solutions
Getting Character to fire bullets torwards mouse.
Collision detection.
Fine tuning frame rate with set interval functions, css animations and other levers


## MVP
Currently contains title screen and two levels with an interlevel dialogue box. Tutorial level is still WIP

## FUTURE -> databases and relations; APIs; component library
Tutorial Level
Multi-Key functionality
Story between levels
HUD displaying health
Music for all levels
Game Over and victory screeens as opposed to alert boxes

## _code snippet_
 My collision detection function
 
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
