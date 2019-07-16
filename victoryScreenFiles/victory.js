const arena = document.querySelector(".arena");
const heroAttributes = new Vector(300, 300);
const mainChar = new Hero(heroAttributes);

const colors = [
  "url(../images/circleGreen2.png)",
  "url(../images/circleBlue.png)",
  "url(../images/circleRed.png)",
  "url(../images/circleYellow.png)"
];

const Dot = function(positionVector) {
  this.position = positionVector;
  this.div;

  this.createDot = function() {
    const tempDiv = document.createElement("DIV");
    tempDiv.classList.add("dots");
    tempDiv.style.backgroundImage =
      colors[Math.floor(Math.random() * colors.length)];
    this.div = tempDiv;
    arena.appendChild(this.div);
  };

  this.renderDot = function() {
    this.div.style.top = `${this.position.y}px`;
    this.div.style.left = `${this.position.x}px`;
  };

  this.updateDotPosistion = function(vector) {
    this.position = vector;
    this.renderDot();
  };
};

const dots = [];

const generateDot = function(vector) {
  let tempDot = new Dot(vector);
  tempDot.createDot();
  let tempSpeed = Math.floor(Math.random() * 5);
  tempDot.div.style.transition = `top ${tempSpeed}s, left ${tempSpeed}s`;
  tempDot.renderDot();
  dots.push(tempDot);
};
const generateRandomNumbers = function(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

const generateRandomVectorOutsideRadius = function() {
  let xPos1 = generateRandomNumbers(0, 550);
  let yPos1 = generateRandomNumbers(0, 550);
  while (xPos1 < 425 && xPos1 > 175 && yPos1 < 425 && yPos1 > 175) {
    xPos1 = generateRandomNumbers(0, 550);
    yPos1 = generateRandomNumbers(0, 550);
  }
  return new Vector(xPos1, yPos1);
};

for (let i = 0; i < 200; i++) {
  generateDot(generateRandomVectorOutsideRadius());
}

const bounceDot = function(dot) {
  let tempPos = dot.position;
  let toVector = addTwoVectors(tempPos, new Vector(0, 5));
  dot.updateDotPosistion(toVector);
};

const unbounceDot = function(dot) {
  let tempPos = dot.position;
  let toVector = addTwoVectors(tempPos, new Vector(0, -5));
  dot.updateDotPosistion(toVector);
};
const bounceAllDots = function() {
  for (let i = 0; i < dots.length; i++) {
    bounceDot(dots[i]);
  }
};

const unbounceAllDots = function() {
  for (let i = 0; i < dots.length; i++) {
    unbounceDot(dots[i]);
  }
};

const selectNumberOfDots = function(number) {
  let dotIndexes = [];
  let tempIndex;
  while (dotIndexes.length < number) {
    tempIndex = generateRandomNumbers(0, dots.length - 1);
    dotIndexes.push(dots[tempIndex]);
    dots.splice(tempIndex, 1);
    console.log(tempIndex);
  }
  return dotIndexes;
};

const bounceSelectNumberOfDots = function(dotArray) {
  for (let i = 0; i < dotArray.length; i++) {
    bounceDot(dotArray[i]);
  }
};

const unbounceSelectNumberOfDots = function(dotArray) {
  for (let i = 0; i < dotArray.length; i++) {
    unbounceDot(dotArray[i]);
  }
};

const offSetBounces = function(dotsToBounce, timeDelay) {
  setTimeout(function() {
    setInterval(function() {
      unbounceSelectNumberOfDots(dotsToBounce);
    }, 500);

    setTimeout(function() {
      setInterval(function() {
        bounceSelectNumberOfDots(dotsToBounce);
      }, 500);
    }, 50);
  }, timeDelay);
};

// const dotsToBounce1 = selectNumberOfDots(40);
// const dotsToBounce2 = selectNumberOfDots(40);
// const dotsToBounce3 = selectNumberOfDots(40);
// const dotsToBounce4 = selectNumberOfDots(40);
// const dotsToBounce5 = selectNumberOfDots(40);

// offSetBounces(dotsToBounce1, 0);
// offSetBounces(dotsToBounce2, 500);
// offSetBounces(dotsToBounce3, 1000);
// offSetBounces(dotsToBounce4, 1500);
// offSetBounces(dotsToBounce5, 250);

const firstText = new TextBox(
  "You Win! You Are King Dot! Click to go back to title"
);
scrollText(firstText);

setInterval(unbounceAllDots, 500);
setTimeout(function() {
  setInterval(function() {
    bounceAllDots();
  }, 500);
}, 100);

document.addEventListener("click", function() {
  document.location.href = "../index.html";
});
