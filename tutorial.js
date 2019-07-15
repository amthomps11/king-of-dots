const arena = document.querySelector(".arena");
const heroAttributes = new Vector(250, 250);
const mainChar = new Hero(heroAttributes);
const allTextBoxes = [];
let hasMoved = false;
let hasShot = false;

// const HUD = document.querySelector(".HUD");
// updateHUD(HUD);

const baddies = [];

const firstText = new TextBox(
  "This white dot is you. Move around with the arrow keys"
);
allTextBoxes.push(firstText);
scrollText(firstText);

updateAllBulletPositions();
checkAllCollisions(mainChar, mainChar.bullets, baddies);
setInterval(() => {
  if (allTextBoxes.length > 0) {
    if (
      (mainChar.position.x !== 250 || mainChar.position.y !== 250) &&
      firstText.completedScrolling === true
    ) {
      firstText.resetText("Shoot a bullet towards your mouse by clicking");
      scrollText(firstText);
      if (
        (mainChar.bullets.length > 0) &
        (firstText.completedScrolling === true)
      ) {
        firstText.resetText("pepeee");
        scrollText(firstText);
      }
    }
  }
  updateAllBulletPositions();
  updateAllBaddies(baddies, mainChar);
  checkAllCollisions(mainChar, mainChar.bullets, baddies);
}, 100);
