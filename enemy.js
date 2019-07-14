const Enemy = function(positionVector) {
  this.position = positionVector;
  this.centerPos = new Vector(
    this.position.x + this.radius,
    this.position.y + this.radius
  );

  this.targets = [];
  this.radius = 25;
  this.div;
  this.enemyType;

  this.createEnemy = function(enemyType) {
    const tempDiv = document.createElement("DIV");

    tempDiv.classList.add("enemy");
    switch (enemyType) {
      case "chaotic":
        tempDiv.classList.add(enemyTypes["chaotic"]);
        break;
      case "chaser":
        tempDiv.classList.add(enemyTypes["chaser"]);
        break;
      case "oscilator":
        tempDiv.classList.add(enemyTypes["oscilator"]);
        break;
    }
    tempDiv.style.height = this.radius * 2 + "px";
    tempDiv.style.width = this.radius * 2 + "px";
    this.div = tempDiv;
    arena.appendChild(this.div);
  };

  this.updateEnemyPosition = function(vector) {
    this.position = vector;
    this.updateCenterPos();
    this.renderEnemy();
  };

  this.setTargets = function() {
    for (let i = 0; i < 4; i++) {
      this.targets.push(new Vector(generateRandomPos(), generateRandomPos()));
    }
  };

  this.updateCenterPos = function() {
    this.centerPos = new Vector(
      this.position.x + this.radius,
      this.position.y + this.radius
    );
  };

  this.renderEnemy = function() {
    this.div.style.top = `${this.position.y}px`;
    this.div.style.left = `${this.position.x}px`;
  };
};

const updateAllBaddies = function(baddies, vector) {
  for (let i = 0; i < baddies.length; i++) {
    let targetIndex = Math.floor(Math.random() * 4);
    baddies[i].updateEnemyPosition(baddies[i].targets[targetIndex]);
  }
};
