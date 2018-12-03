/*
 * @name Interactivity 1
 * @frame 720,425
 * @description The circle changes color when you click on it.
 * <p><em><span class="small"> To run this example locally, you will need the
 * <a href="http://p5js.org/reference/#/libraries/p5.dom">p5.dom library</a>.
 * </em></p>
 */

// for red, green, and blue color values
var r, g, b;

function setup() {
  createCanvas(720, 400);
  // Pick colors randomly
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background(r, g, b, 10);
  // Draw a circle
  strokeWeight(2);
  fill(r, g, b, random(255));
  ellipse(random(width), random(height), mouseX, mouseY);
}

// When the user clicks the mouse
function mousePressed() {
  r = random(255);
  g = random(255);
  b = random(255);
}
