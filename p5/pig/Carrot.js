class Carrot {
  constructor(_xPos, _yPos, _rotation, _speed) {
    this.xPos = _xPos;
    this.yPos = _yPos;
    this.rotation = _rotation;
    this.speed = _speed;
  }
  //------------------------------------------------------------
  display() {
    noStroke();

    push();
    translate(this.xPos, this.yPos);
    rotate(this.rotation);
    rectMode(CENTER);
    fill(250, 200, 10); //orange
    rect(0, 0, width * 0.1, height * 0.02); //carrot
    fill(100, 200, 100); //green
    rect(-36, 0, width * 0.02, height * 0.008); //stem
    pop();
  }
  move() {
    this.rotation += this.speed;

    if (this.yPos <= height * 1.3) {
      this.yPos += 5;
    } else {
      this.yPos = -200;
    }
  }
  //------------------------------------------------------------
}