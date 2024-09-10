// function pageLoadedHandler() {
//   alert("I'm alive!");
// }

window.onload = init;
function init() {
  let images = document.getElementsByTagName("img");
  for (let i = 0; i < images.length; i++) {
    images[i].onclick = showAnswer;
  }
}

function showAnswer(eventObj) {
  let image = eventObj.target;
  let name = image.id;
  name += ".jpg";
  image.src = name;

  setTimeout(reblur, 2000, image);
}

function reblur (image) {
  let name = image.id;
  name = name + "blur.jpg";
  image.src = name;
}
