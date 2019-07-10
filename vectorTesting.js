let a = new Vector(100, 100);
console.log(a);
let dottya = document.createElement("div");
dottya.classList.add("dots");
dottya.style.left = a.posX + "px";
dottya.style.top = a.posY + "px";
dottya.innerHTML = `x:${a.posX} y:${a.posY}`;
document.body.appendChild(dottya);

let b = new Vector(300, 200);
console.log(b);
let dottyb = document.createElement("div");
dottyb.classList.add("dots");
dottyb.style.left = b.posX + "px";
dottyb.style.top = b.posY + "px";
dottyb.innerHTML = `x:${b.posX} y:${b.posY}`;
document.body.appendChild(dottyb);

let dAtoB = a.calcDistance(b);
let dBtoA = b.calcDistance(a);

let magA = a.calcMagnitude();
let magB = b.calcMagnitude();

let unA = a.getUnitVector();
let unB = b.getUnitVector();

console.log(`dAtoB: ${dAtoB}`);
console.log(`dBtoA: ${dBtoA}`);
console.log(`magA: ${magA}`);
console.log(`magB: ${magB}`);

console.log(`unA`);
console.log(unA);
console.log(unA.calcMagnitude());

console.log(`unB`);
console.log(unB);
console.log(unB.calcMagnitude());

let unAtoB = a.getUnitVectorTo(b);
console.log(`unAtoB`);
console.log(unAtoB);
console.log(unAtoB.calcMagnitude());

let unBtoA = b.getUnitVectorTo(a);
console.log(`unBtoA`);
console.log(unBtoA);
console.log(unBtoA.calcMagnitude());

// setInterval(function() {
//   a.addVector(unAtoB);
//   dottya.style.left = a.posX + "px";
//   dottya.style.top = a.posY + "px";
// }, 50);
let clickVector;
let unAtoClickVector;
document.addEventListener("click", function(evt) {
  console.log(evt);
  clickVector = new Vector(evt.clientX, evt.clientY);
  unAtoClickVector = a.getUnitVectorTo(clickVector);
  console.log("untoaclickvector");
  console.log(unAtoClickVector);
});

setInterval(function() {
  a.addVector(unAtoClickVector);
  dottya.style.left = a.posX + "px";
  dottya.style.top = a.posY + "px";
}, 50);
