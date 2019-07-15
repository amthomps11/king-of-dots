const Enemy = function(positionVector) {
  this.position = positionVector;
  this.centerPos = new Vector(
    this.position.x + this.radius,
    this.position.y + this.radius
  );

  this.targets = [];
  this.targetIndex = 0;
  this.radius = 25;
  this.div;
  this.enemyType;
  this.setTargets = function() {
    switch (this.enemyType) {
      case "chaotic":
        for (let i = 0; i < 10; i++) {
          this.targets.push(
            new Vector(generateRandomPos(), generateRandomPos())
          );
        }
        break;
      case "chaser":
        break;
      case "oscilator":
        let startVector = this.position;
        let endVector = new Vector(600, 0);
        let directionalVector = startVector.getUnitVectorTo(endVector);
        let distance = startVector.calcDistance(endVector);
        directionalVector.setMagnitude(distance / 32);
        let tempVector = startVector;
        let tempReverseDirections = [];
        let tempReverseVector;
        this.targets.push(startVector);
        tempReverseDirections.push(startVector);
        for (let i = 0; i < 30; i++) {
          tempVector = addTwoVectors(tempVector, directionalVector);
          this.targets.push(tempVector);
          tempReverseDirections.push(tempVector);
        }
        tempReverseDirections.reverse();
        this.targets = this.targets.concat(tempReverseDirections);
        break;
    }
  };

  this.renderEnemy = function() {
    this.div.style.top = `${this.position.y}px`;
    this.div.style.left = `${this.position.x}px`;
  };

  this.createEnemy = function(enemyType) {
    this.enemyType = enemyType;
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
    this.renderEnemy();
    this.setTargets();
  };

  this.updateEnemyPosition = function(vector) {
    this.position = vector;
    this.renderEnemy();
  };
};

const updateAllBaddies = function(baddies, hero) {
  for (let i = 0; i < baddies.length; i++) {
    let targetIndex;
    let tempDirection;
    switch (baddies[i].enemyType) {
      case "chaotic":
        targetIndex = Math.floor(Math.random() * baddies[i].targets.length);
        baddies[i].updateEnemyPosition(baddies[i].targets[targetIndex]);
        break;
      case "chaser":
        tempDirection = baddies[i].position.getUnitVectorTo(hero.position);
        tempDirection.setMagnitude(3);
        let tempVectorToHero = addTwoVectors(
          baddies[i].position,
          tempDirection
        );
        baddies[i].updateEnemyPosition(tempVectorToHero);

        break;
      case "oscilator":
        if (baddies[i].targetIndex === baddies[i].targets.length) {
          baddies[i].targetIndex = 0;
        }
        baddies[i].updateEnemyPosition(
          baddies[i].targets[baddies[i].targetIndex]
        );
        baddies[i].targetIndex++;
        break;
    }
  }
};
