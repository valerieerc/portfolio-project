let y; 
let textColor; 

function preload(){
  font = loadFont('Silkscreen-Bold.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  textSize(60); 
  y = 0; 
  changeTextColor(); 
}

function draw() {
  background("hotpink"); 

  
  fill(textColor); 
  textAlign(CENTER, CENTER);
  text("THIS IS THE HOMEPAGE", width / 2, y);

  y += 2; 

  if (y > height) {
    y = 0; 
    changeTextColor(); 
  }
}


function changeTextColor() {
  textColor = color(random(255), random(255), random(255)); 
}