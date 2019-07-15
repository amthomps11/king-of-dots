const TextBox = function(string) {
  this.div;
  this.textToDisplay = "";
  this.textArray = string.split("");
  this.currentTextIndex = 0;
  this.completedScrolling = false;

  this.createDiv = function() {
    this.div = document.createElement("DIV");
    this.div.classList.add("textBox");
    document.body.appendChild(this.div);
  };

  this.createDiv();

  this.deleteDiv = function() {
    document.body.removeChild(this.div);
  };

  this.displayText = function() {
    this.div.innerHTML = this.textToDisplay;
  };

  this.setTextToDisplay = function(string) {
    this.textArray = string.split("");
  };

  this.updateText = function() {
    this.textToDisplay += this.textArray[this.currentTextIndex];
    this.currentTextIndex++;
    this.displayText();
  };
};

let scrollText = function(textBox) {
  let scrolling = setInterval(function() {
    textBox.updateText();
    if (textBox.currentTextIndex === textBox.textArray.length) {
      clearInterval(scrolling);
      textBox.completedScrolling = true;
    }
  }, 100);
};
