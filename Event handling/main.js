// function pageLoadedHandler() {
//   alert("I'm alive!");
// }

window.onload = init;
function init() {
  let image = document.getElementById("zero");
  image.onclick = showAnswer;
}

function showAnswer() {
  let image = document.getElementById("zero");
  image.src = "zero.jpg";
}
