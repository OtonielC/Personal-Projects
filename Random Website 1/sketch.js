//Otoniel Carreon
function init(){
  canvas = document.getElementById('cnv');
  canvas.style.border = 'solid black 2px';
  canvas.style.backgroundColor = 'rgba(0,44,55, .5)';
  ctx = canvas.getContext('2d');
  loadBalls(100);
  animate();
}
