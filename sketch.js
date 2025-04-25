

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
  noFill();
  stroke(activeColour);
  if ( rand < 0.25 ) strokeWeight(sin(frameCount*0.05) * 7 + 17);
   else if ( rand < 0.50) strokeWeight(sin(frameCount*0.1) * 5 + 11);
    else if ( rand < 0.75 ) strokeWeight(sin(frameCount*0.15) * 7 + 17);
    else if ( rand < 1.00 ) strokeWeight(sin(frameCount*0.2) * 5 + 11) ;
  
  line(pmouseX, pmouseY, mouseX, mouseY);
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
      noFill();
  stroke(activeColour);
  if ( rand < 0.25 ) strokeWeight(sin(frameCount*0.05) * 7 + 17);
   else if ( rand < 0.50) strokeWeight(sin(frameCount*0.1) * 5 + 11);
    else if ( rand < 0.75 ) strokeWeight(sin(frameCount*0.15) * 7 + 17);
    else if ( rand < 1.00 ) strokeWeight(sin(frameCount*0.2) * 5 + 11) ;
  
  line(pmouseX, pmouseY, mouseX, mouseY);
}

function touchStarted() {
  lastTouchTime = millis();
    prev = [mouseX, mouseY];
  rand = random();
  // Code to run.
  if ( mouseY < 100 ) activeColour = colourList[floor(mouseX / windowWidth * colourList.length)];
  
  noStroke();
    noFill();
  stroke(activeColour);
  if ( rand < 0.25 ) strokeWeight(sin(frameCount*0.05) * 7 + 17);
   else if ( rand < 0.50) strokeWeight(sin(frameCount*0.1) * 5 + 11);
    else if ( rand < 0.75 ) strokeWeight(sin(frameCount*0.15) * 7 + 17);
    else if ( rand < 1.00 ) strokeWeight(sin(frameCount*0.2) * 5 + 11) ;
  
  line(pmouseX, pmouseY, mouseX, mouseY);
  
}
