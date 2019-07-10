const Vector = function(x, y) {
  this.posX = x;
  this.posY = y;
  this.mag = this.calcMagnitude;

  this.calcDistance = function(vector) {
    return Math.sqrt(
      Math.pow(this.posX - vector.posX, 2) +
        Math.pow(this.posY - vector.posY, 2)
    );
  };

  this.calcMagnitude = function() {
    return Math.sqrt(Math.pow(this.posX, 2) + Math.pow(this.posY, 2));
  };

  this.getUnitVector = function() {
    return new Vector(
      this.posX / this.calcMagnitude(),
      this.posY / this.calcMagnitude()
    );
  };

  this.getUnitVectorTo = function(vector) {
    // console.log("this");
    // console.log(this);
    // console.log("vector");
    // console.log(vector);
    // console.log(`this.posX:${this.posX}`);
    // console.log(`this.posY:${this.posY}`);
    // console.log(`vector.posX:${vector.posX}`);
    // console.log(`vector.posY:${vector.posY}`);

    return new Vector(
      (vector.posX - this.posX) / this.calcDistance(vector),
      (vector.posY - this.posY) / this.calcDistance(vector)
    );
  };

  this.addVector = function(vector) {
    this.posX += vector.posX;
    this.posY += vector.posY;
  };
};
