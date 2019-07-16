const arena = document.querySelector(".arena");

const firstText = new TextBox(
  "You defeated your first enemies but the battle has just begun. Click to Continue"
);
scrollText(firstText);

document.addEventListener("click", function() {
  document.location.href = "./levelTwoFiles/level2.html";
});
