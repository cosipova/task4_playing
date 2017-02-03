

var letter = "KO";

function setup(){
  createCanvas(780, 780);
  background(91, 191, 198);
  stroke(255,10,255);
  textFont("Courier New");
  textSize(100);
  textAlign(CENTER, CENTER);
}

function mouseMoved(){
  background(91, 191, 198);
  noStroke();
  fill(0);
  textSize((mouseX-width/2)*5+1);
  text(letter, width/2, mouseY);
}

function mouseDragged(){

  stroke(0);
  noFill();
  textSize((mouseX-width/2)*5+1);
  text(letter, width/2, mouseY);
}

function keyPressed() {
  if (keyCode == CONTROL) save("P_3_0_01.png");
}

function keyTyped(){
      letter = str(key);
  
}