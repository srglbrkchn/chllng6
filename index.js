var status = "hidden";

function buttonActive() {
  document.querySelector(".bubble").style.visibility = "visible";
  document.querySelector(".share").style.color = "#fff";
  document.querySelector(".share").style.background = "hsl(214, 17%, 51%)";
  status = "appear";

  var ding = new Audio("sounds/ding.mp3");
  ding.play();
}

function buttonInactive() {
  document.querySelector(".bubble").style.visibility = "hidden";
  document.querySelector(".share").style.color = "hsl(214, 17%, 51%)";
  document.querySelector(".share").style.background = "hsl(210, 46%, 95%)";
  status = "hidden";

  var ding = new Audio("sounds/ding.mp3");
  ding.play();
}


document.querySelector(".share").addEventListener("click", function() {

  if (status === "hidden") {
    buttonActive();
  } else {
    buttonInactive();
  }

});
