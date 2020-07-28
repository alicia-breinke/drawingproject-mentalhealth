let img;
var increase = 5;
var r = 244;
var g = 64;
var b = 0;
let c;
function preload() {
img = loadImage('https://alicia-breinke.github.io/drawingproject-mentalhealth/assets/drawing-background.jpg');
}
function setup(){
  c = createCanvas(975, 506);
  background(100, 100, 100);
  stroke('rgb(244, 64, 75)');
}

function draw () {
    strokeWeight(increase);
   if (mouseIsPressed) {
  line(mouseX, mouseY, pmouseX, pmouseY);
  stroke(r, g, b, 100);
   }
}

function keyPressed() {
  if (key === 'r') {
    print("hello");
    r = 255;
    g = 114;
    b = 0;
    print(r);
  }
  if (key === 'g') {
    r = 0;
    g = 114;
    b = 0;
  }
  if (key === 'i'){
  increase += 5;
  }
  if (key === 'c'){
    saveCanvas(c, 'myCanvas', 'jpg');
  }
}
