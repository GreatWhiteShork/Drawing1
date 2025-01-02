

var colourList = [];
var activeColour;

var rand;
var prev;
var lastTouchTime = 0;

function setup() {
  colourList.push(color(255,0,0));
  colourList.push(color(255,160,0));
  colourList.push(color(250,235,0));
  colourList.push(color(0,255,0));
  colourList.push(color(0,0,255));
  colourList.push(color(255,0,160));
  createCanvas(windowWidth, windowHeight);
  background(255);
  stroke(0);
  strokeWeight(15);
  noFill();
  rect(0,0,windowWidth,windowHeight);
  
  activeColour = colourList[floor(random() * colourList.length)];
  rand = random();
}

function draw() {
  
  if ( millis() - lastTouchTime > 2500 ) background(255,255,255, 10);
  
  
  var shapeWidth = windowWidth / colourList.length;
  for ( var i = 0, iL = colourList.length; i < iL; i++ ) {
    var targetColour = colourList[i];
    
    noStroke();
    fill(targetColour);
    rect(i*shapeWidth, 0, shapeWidth, 100);
    
    if ( targetColour == activeColour ) {
      noFill();
      stroke(255);
      strokeWeight(5);
      circle(i * shapeWidth + ( shapeWidth * 0.5), 53.75, shapeWidth * 0.5);
    }
    
    
  }
  stroke(0);
  strokeWeight(15);
  noFill();
  rect(0,0,windowWidth,windowHeight);
}

function mouseDragged() {
  lastTouchTime = millis();
  
    noStroke();
  fill(255,255,255,3);
  rect(0,0,windowWidth,windowHeight);
  
  if ( prev == undefined ) {
    prev = [mouseX, mouseY];
  }
  
  if ( rand < 0.25 ) {
    noFill();
    stroke(activeColour);
    strokeWeight(15);
    line(pmouseX, pmouseY, mouseX, mouseY);
    return;
  } else {
    if ( dist(mouseX, mouseY, prev[0], prev[1]) < 50 ) return;
    prev = [mouseX, mouseY];
    noStroke();
    fill(activeColour);
    
    if ( rand < 0.50) circle(mouseX, mouseY, 35);
    else if ( rand < 0.75 ) square(mouseX-17.7, mouseY-17.5, 35);
    else if ( rand < 1.00 ) triangle(mouseX - 20, mouseY + 10, mouseX, mouseY - 25, mouseX + 20, mouseY + 10)
  }
  
}

function mouseReleased() {
  lastTouchTime = millis();
}

function mousePressed() {
  lastTouchTime = millis();
  
    prev = [mouseX, mouseY];
  // noStroke();
  // fill(255,255,255,5);
  // rect(0,0,windowWidth,windowHeight);
  
  rand = random();
  if ( mouseY < 100 ) activeColour = colourList[floor(mouseX / windowWidth * colourList.length)];
  noStroke();
      if ( rand < 0.25 ) {
    fill(activeColour);
    noStroke();
    circle(mouseX, mouseY, 15);
  } else {
    fill(activeColour);
    
    if ( rand < 0.50) circle(mouseX, mouseY, 35);
    else if ( rand < 0.75 ) square(mouseX-17.7, mouseY-17.5, 35);
    else if ( rand < 1.00 ) triangle(mouseX - 20, mouseY + 10, mouseX, mouseY - 25, mouseX + 20, mouseY + 10)
  }
}

function touchStarted() {
  lastTouchTime = millis();
    prev = [mouseX, mouseY];
  rand = random();
  // Code to run.
  if ( mouseY < 100 ) activeColour = colourList[floor(mouseX / windowWidth * colourList.length)];
  
  noStroke();
    if ( rand < 0.25 ) {
    fill(activeColour);
    noStroke();
    circle(15);
  } else {
    fill(activeColour);
    
    if ( rand < 0.50) circle(mouseX, mouseY, 35);
    else if ( rand < 0.75 ) square(mouseX-17.7, mouseY-17.5, 35);
    else if ( rand < 1.00 ) triangle(mouseX - 20, mouseY + 10, mouseX, mouseY - 25, mouseX + 20, mouseY + 10)
  }
  
}