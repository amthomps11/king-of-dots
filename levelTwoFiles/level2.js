const arena = document.querySelector(".arena");
const heroAttributes = new Vector(250, 250);
const mainChar = new Hero(heroAttributes);

const baddies1 = [];

const startingChaser = [
  //   new Vector(0, 0),
  //   new Vector(0, 50),
  //   new Vector(0, 100),
  //   new Vector(0, 150),
  //   new Vector(0, 200),
  //   new Vector(0, 250),
  //   new Vector(0, 300),
  //   new Vector(0, 350),
  //   new Vector(0, 400),
  //   new Vector(0, 450),
  //   new Vector(0, 500),

  new Vector(50, 0),
  new Vector(100, 0),
  new Vector(150, 0),
  new Vector(200, 0),
  new Vector(250, 0),
  new Vector(300, 0),
  new Vector(350, 0),
  new Vector(400, 0),
  new Vector(450, 0),
  new Vector(500, 0),

  new Vector(0, 500),
  new Vector(50, 500),
  new Vector(100, 500),
  new Vector(150, 500),
  new Vector(200, 500),
  new Vector(250, 500),
  new Vector(300, 500),
  new Vector(350, 500),
  new Vector(400, 500),
  new Vector(450, 500),
  new Vector(500, 500)
];

for (let i = 0; i < startingChaser.length; i++) {
  let enemyPos = startingChaser[i];
  let badGuy = new Enemy(enemyPos);
  badGuy.createEnemy("chaser");
  badGuy.renderEnemy();
  badGuy.setTargets();
  baddies1.push(badGuy);
}

const startingOscPostitions = [
  new Vector(0, 0),
  new Vector(500, 0),
  new Vector(500, 500),
  new Vector(0, 500),
  new Vector(250, 0),
  new Vector(500, 250),
  new Vector(250, 500),
  new Vector(0, 250)
];

const startingEndPositions = [
  new Vector(500, 0),
  new Vector(500, 500),
  new Vector(0, 500),
  new Vector(0, 0),
  new Vector(500, 250),
  new Vector(250, 500),
  new Vector(0, 250),
  new Vector(250, 0)
];

for (let i = 0; i < startingOscPostitions.length; i++) {
  let enemyPos = startingOscPostitions[i];
  let badGuy = new Enemy(enemyPos);
  badGuy.setEndVector(startingEndPositions[i]);
  badGuy.createEnemy("oscilator");
  badGuy.renderEnemy();
  badGuy.setTargets();
  baddies1.push(badGuy);
}

const allThebadguys = [baddies1];

runAllUpdates(allThebadguys);
