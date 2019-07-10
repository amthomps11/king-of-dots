let a = new Vector(100, 100);
console.log(a);
let dotty = document.createElement("div");
dotty.classList.add("dots");
dotty.style.left = a.posX + "px";
dotty.style.top = a.posY + "px";
dotty.innerHTML = document.body.append(dotty);
