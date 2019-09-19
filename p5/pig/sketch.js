let carrotArray = [];
let mouth = 0;
let mic, micL;
let foodHide = 255;
let mouthMove, earMove;
let eyesX, eyesY;
let colorRed = 150;
let colorGreen = 200;
let colorBlue = 255;
let num = -0.5;
let healthBar = 600;
let meal = 0;
let health = 5;
//------------------------------------------------------------
function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  mic = new p5.AudioIn()
  mic.start();
  frameRate(30);

  for (let i = 0; i < 20; i++) {
    carrotArray.push(new Carrot(random(width), random(height), random(this.rotation), random(this.speed)));
  }
}
//------------------------------------------------------------
function draw() {
  background(colorRed, colorGreen, colorBlue);
  micL = mic.getLevel(0.8);

  for (let i = 0; i < carrotArray.length; i++) {
    carrotArray[i].move();
    carrotArray[i].display();
  }

  mouthMove = map(mouth, 0, 0.01, 45, 60, true);
  earMove = map(micL, 0, 0.01, 1.1, 1, true);
  eyesX = map(mouseX, 0, width, 55, 65, true);
  eyesY = map(mouseY, 0, height, -26, -16, true);

  ground(colorRed, colorGreen);
  eat();
  drawHead(earMove, eyesX, eyesY, mouthMove);
  drawCarrot();
  drawBasket();
  pigHealth();
  // console.log(health, meal);
  // drawGrid();
}
//------------------------------------------------------------
function pigHealth() {
  fill(100, 200, 100);
  rect(0, 0, healthBar, 20);
  // fill(0, 0, 0);
  // textSize(16);
  // textStyle(BOLD);
  // text('A CARROT A DAY GOES A LONG WAY', 8, 15);
  fill(255, 255, 255);
  textSize(16);
  text('A CARROT A DAY GOES A LONG WAY', 10, 15);
  // text(health, 300, 15); //display health in numbers


  if (colorRed <= 20 && meal <= 0) {
    health -= 1;
    healthBar -= 120;
    meal = 0;
  } else if (colorRed <= 20 && meal >= 1) {
    health += 1;
    healthBar += 120;
    meal = 0;
  } else if (health == 0 || health <= 0) {
    fill(0, 0, 0);
    rect(-300, -300, 1200, 1200);
    fill(255, 255, 255);
    textSize(24);
    text('Zero carrots everyday makes me go away', 70, 250);
    textSize(16);
    text('Refresh the page to play again', 190, 400);
  }
}

function eat() {
  //if statement, affects carrot's alpha color
  if (mouseX >= 250 && mouseX <= 350 && mouseY >= 340 && mouseY <= 370) {
    mouth = 20;    
    foodHide = 0;
  } else if (mouseX >= 250 && mouseX <= 350 && mouseY >= 550) {
    foodHide = 255;
  } else {
    mouth = 0;
  }

  if (mouth == 20) {
    meal = 1;
  }
}

function drawHead(earMove, eyesX, eyesY, mouthMove) {
  //ears
  noStroke();
  push();
  translate(300, 300);
  scale(earMove);
  rotate(60);
  fill(255, 190, 160);
  ellipse(-105, 40, 100, 90);
  fill(250, 170, 150);
  ellipse(-100, 40, 100, 80);
  pop();
  push();
  translate(300, 300);
  scale(earMove);
  rotate(-60);
  fill(255, 190, 160);
  ellipse(105, 40, 100, 90);
  fill(250, 170, 150);
  ellipse(100, 40, 100, 80);
  pop();
  //head
  fill(255, 190, 160);
  circle(300, 300, 200);
  ellipse(300, 310, 210, 180);
  //eyes
  fill(0);
  ellipse(eyesX + 180, eyesY + 300, 10, 15);
  ellipse(eyesX + 300, eyesY + 300, 10, 15);
  //eyelids
  fill(255, 190, 160);
  ellipse(300, 305, 200, 50);
  //mouth
  fill(240, 150, 130);
  ellipse(300, mouthMove + 300, 35, 30);
  fill(255, 170, 150);
  ellipse(300, mouthMove + 310, 30, 10);
  //nose
  fill(240, 170, 140);
  ellipse(300, 330, 60, 40);
  ellipse(285, 335, 40, 40);
  ellipse(315, 335, 40, 40);
  //nose hole
  fill(200, 130, 100);
  ellipse(315, 330, 10, 10);
  ellipse(285, 330, 10, 10);
}

function drawCarrot() {
  //carrot that is held
  fill(250, 200, 10, foodHide);
  rect(mouseX - 50, mouseY, 100, 10);
  rect(mouseX - 10, mouseY - 3, 60, 15);
  fill(100, 200, 100, foodHide);
  rect(mouseX + 50, mouseY, 10, 6);
}

function drawBasket() {
  //carrot leaves behind
  fill(90, 190, 90);
  rect(272, 509, 10, 300);
  rect(292, 512, 10, 300);
  rect(310, 510, 10, 300);
  //carrots behind
  fill(240, 190, 0);
  rect(270, 525, 15, 300);
  rect(290, 525, 15, 300);
  rect(310, 520, 15, 300);
  //carrot leaves front
  fill(100, 200, 100);
  rect(282, 506, 10, 300);
  rect(299, 516, 10, 300);
  rect(320, 525, 10, 300);
  //carrot front
  fill(250, 200, 10);
  rect(280, 520, 15, 300);
  rect(297, 530, 15, 300);
  rect(320, 535, 15, 300);
  //basket
  fill(175, 150, 124);
  rect(250, 560, 100, 200);
}

function ground(_colorRed, _colorGreen) {
  //ground
  fill(_colorRed, _colorGreen, 170);
  rect(0, 400, 600, 300);
  //mountain #4
  fill(_colorRed, _colorGreen, 230);
  triangle(480, 300, 1000, 480, -200, 480);
  //mountain #3
  fill(_colorRed, _colorGreen, 220);
  triangle(100, 300, 600, 480, -500, 480);
  //mountain #2
  fill(_colorRed, _colorGreen, 210);
  triangle(600, 300, 200, 480, 600, 480);
  //mountain #1
  fill(_colorRed, _colorGreen, 190);
  triangle(0, 300, 400, 500, 0, 500);
  //day to night & night to day
  colorRed += num;
  colorGreen += num;
  colorBlue += num;
  if (colorRed <= 20) {
    num = -num;
  } else if (colorRed >= 150) {
    num = --num;
  }
}

function drawGrid() {
  stroke(200);
  fill(120);
  for (var x = -width; x < width; x += 40) {
    line(x, -height, x, height);
    text(x, x + 1, 12);
  }
  for (var y = -height; y < height; y += 40) {
    line(-width, y, width, y);
    text(y, 1, y + 12);
  }
}