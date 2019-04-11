//code edited from Chris Nielsen:
//http://bluegalaxy.info/codewalk/2018/01/04/p5-js-build-starfield/

var stars = [];
var speed;
var xx = 0;
var yy = 0;
var easing = 0.05;


  function setup() {
    createCanvas(1175, 440, WEBGL);
    star = new Star();

    for (var i = 0; i < 1600; i++) {
      stars[i] = new Star();
    }
  }

  function draw() {
    speed = map(5, 0, width, 10, 30);
    background(10, 0, 50);
    translate(-width/2, -height/2);
		var targetX = mouseX;
    var dx = targetX - xx;
    xx += dx * easing;

    var targetY = mouseY;
    var dy = targetY - yy;
    yy += dy * easing;
    translate(xx, yy, -200)

    for (var i = 0; i < stars.length; i++) {
      stars[i].update();
      stars[i].show();
    }
  }

class Star {
  constructor() {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);
  }

  update() {
    this.z = this.z - speed;
    if (this.z < 1) {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = width;

    }
  }

  show() {
    fill(random(0, 255), random(0, 255), random(0, 255));
		noStroke();
    var sx = map(this.x/this.z, 0, 1, 0, width);
    var sy = map(this.y/this.z, 0, 1, 0, height);
    var r = map(this.z, 0, width, 12, 0);
    ellipse(sx, sy, r, r);
  }
}
