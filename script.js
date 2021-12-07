function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function loadImage() {
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor
}