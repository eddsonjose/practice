//modified example from coding train: https://www.youtube.com/watch?v=fBqaA7zRO58
let particles = []; //array

function setup() {
  createCanvas(1000, 400);
  resetSketch();
  var button = createButton("reset");
  button.mousePressed(resetSketch);

}

function resetSketch() {
  for (let i = 0; i < 100; i++) { //loop, define the amount of particles
    let x = 10 + 100 * i;
    particles[i] = new Particle(x, 200, 5);
  }
}

function draw() {
  background(255);
  for (let i = 0; i < particles.length; i++) {
    particles[i].move();
    particles[i].show();
  }
}

class Particle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() {
    this.y = this.y - random(1, 20);
    if (this.y < 0) {
      this.y = height;
      this.x = random(0, width);
    }
  }

  show() {
    noStroke();
    fill(random(255));
    ellipse(this.x, this.y, this.r * 2);
  }
}
