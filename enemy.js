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
  this.distanceToOscialte = 50;

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
  };

  this.updateEnemyPosition = function(vector) {
    this.position = vector;
    this.renderEnemy();
  };

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
        let endVector = new Vector(generateRandomPos(), generateRandomPos());
        // console.log(startVector);
        // console.log(endVector);
        let directionalVector = startVector.getUnitVectorTo(endVector);
        // console.log(directionalVector);
        // this.targets.push(endVector);
        directionalVector.setMagnitude(this.distanceToOscialte);
        let tempVector = startVector;
        let tempReverseDirections = [];
        let tempReverseVector;
        for (let i = 0; i < 10; i++) {
          tempVector = addTwoVectors(tempVector, directionalVector);
          this.targets.push(tempVector);
          // tempReverseVector = reverseAVector(tempVector);
          tempReverseDirections.push(tempVector);
          // console.log(tempVector);
          // console.log(tempReverseVector);
        }
        tempReverseDirections.reverse();
        console.log(this.targets);
        console.log(tempReverseDirections);
        this.targets = this.targets.concat(tempReverseDirections);
        console.log(this.targets);
        break;
    }
  };

  this.renderEnemy = function() {
    this.div.style.top = `${this.position.y}px`;
    this.div.style.left = `${this.position.x}px`;
  };
};

const updateAllBaddies = function(baddies) {
  for (let i = 0; i < baddies.length; i++) {
    let targetIndex;
    switch (baddies[i].enemyType) {
      case "chaotic":
        targetIndex = Math.floor(Math.random() * baddies[i].targets.length);
        baddies[i].updateEnemyPosition(baddies[i].targets[targetIndex]);
        break;
      case "chaser":
        break;
      case "oscilator":
        if (baddies[i].targetIndex === baddies[i].targets.length) {
          baddies[i].targetIndex = 0;
        }
        // if (baddies[i].targetIndex === baddies[i].targets.length) {
        //   baddies[i].targetIndex = baddies[i].targets.length - 1;
        // }

        baddies[i].updateEnemyPosition(
          baddies[i].targets[baddies[i].targetIndex]
        );
        baddies[i].targetIndex++;
        break;
    }
  }
};
