const Vector = function(x, y) {
  this.x = x;
  this.y = y;
  this.mag = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));

  this.calcDistance = function(vector) {
    return Math.sqrt(
      Math.pow(this.x - vector.x, 2) + Math.pow(this.y - vector.y, 2)
    );
  };

  this.resetMagnitude = function() {
    this.mag = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  };

  this.getUnitVector = function() {
    return new Vector(this.x / this.mag, this.y / this.mag);
  };

  this.getUnitVectorTo = function(vector) {
    let newVec = new Vector(
      (vector.x - this.x) / this.calcDistance(vector),
      (vector.y - this.y) / this.calcDistance(vector)
    );
    return newVec;
  };

  this.addToCurrentVector = function(vector) {
    this.x += vector.x;
    this.y += vector.y;
  };

  this.setMagnitude = function(newMag) {
    this.x = (this.x * newMag) / this.mag;
    this.y = (this.y * newMag) / this.mag;
    this.mag = newMag;
  };

  this.moveTo = function(vector) {
    this.x = vector.x;
    this.y = vector.y;
  };
};

const addTwoVectors = function(a, b) {
  return new Vector(a.x + b.x, a.y + b.y);
};
