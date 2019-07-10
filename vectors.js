const Vector = function(x, y) {
  this.posX = x;
  this.posY = y;

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
    return new Vector(
      (this.posX - vector.posX) / this.calcDistance(vector),
      (this.posY - vector.posY) / this.calcDistance(vector)
    );
  };

  this.addVector = function(vector) {
    this.posX += vector.posX;
    this.posY += vector.posY;
  };
};
