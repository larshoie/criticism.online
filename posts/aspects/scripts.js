console.log("hey");

var isEnglishActive = true;
var hasSwitched = false;

function switchLang() {
  document.body.classList.add("has-switched");
  hasSwitched = true;
  if (isEnglishActive) {
    document.body.classList.remove("english");
    document.body.classList.add("russian");
    isEnglishActive = false;
  } else {
    document.body.classList.remove("russian");
    document.body.classList.add("english");
    isEnglishActive = true;
  }
}

function main() {
  var overlay = document.querySelector(".overlay");
  overlay.addEventListener("click", switchLang);
  var switchLangButtons = document.querySelectorAll(".switch-lang-button");
  switchLangButtons.forEach(function(button) {
    button.addEventListener("click", switchLang);
  });
}

main();
