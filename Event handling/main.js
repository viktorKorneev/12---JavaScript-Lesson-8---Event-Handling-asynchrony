// function pageLoadedHandler() {
//   alert("I'm alive!");
// }

window.onload = init;
function init() {
  let image0 = document.getElementById("zero");
  image0.onclick = showImageZero;
  let image1 = document.getElementById("one");
  image1.onclick = showImageOne;
  let image2 = document.getElementById("two");
  image2.onclick = showImageTwo;
  let image3 = document.getElementById("three");
  image3.onclick = showImageThree;
  let image4 = document.getElementById("four");
  image4.onclick = showImageFour;
  let image5 = document.getElementById("five");
  image5.onclick = showImageFive;
}

function showImageZero() {
  let image = document.getElementById("zero");
  image.src = "zero.jpg";
}

function showImageOne() {
  let image = document.getElementById("one");
  image.src = "one.jpg";
}

function showImageTwo() {
  let image = document.getElementById("two");
  image.src = "two.jpg";
}

function showImageThree() {
  let image = document.getElementById("three");
  image.src = "three.jpg";
}

function showImageFour() {
  let image = document.getElementById("four");
  image.src = "four.jpg";
}

function showImageFive() {
  let image = document.getElementById("five");
  image.src = "five.jpg";
}
