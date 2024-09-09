// function pageLoadedHandler() {
//   alert("I'm alive!");
// }

window.onload = init;
function init() {
  let images = document.getElementsByTagName("img");
  for(let i = 0; i < images.length; i++){
    images[i].onclick = showAnswer;
  }
}

function showAnswer() {
    
}


