let img;
var increase = 5;
var decrease = 5;
var r = 255;
var g = 64;
var b = 0;
let y;
let c;
function preload() {
img = loadImage('assets/drawing-background.jpg');
}
function setup(){
  c = createCanvas(975, 506);
  background(100, 100, 100);
  image(img, 50, 50);
  stroke ('rgb(245, 245, 0)');
}

function draw () {
    strokeWeight(increase);
    strokeWeight(decrease);
   if (mouseIsPressed) {
  line(mouseX, mouseY, pmouseX, pmouseY);
  stroke(r, g, b);
  strokeWeight(100);
   }
}

function keyPressed() {
  if (key === 'r') {
    r = 255;
    g = 0;
    b = 0;
    print(r);
  }
  if (key === 'g') {
    r = 0;
    g = 64;
    b = 0;
  }
  if (key === 'b') {
    r = 0;
    g = 0;
    b = 0;
  }
  if (key === 'y'){
    r = 245;
    g = 245;
    b = 0;
  }
  if (key === 'i') {
    increase += 5;
  } else if (key === 'd') {
    decrease -= 5;
  }
  if (key === 'c'){
    saveCanvas(c, 'myCanvas', 'jpg');
  }
}
