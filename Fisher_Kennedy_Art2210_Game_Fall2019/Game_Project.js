var Hue = 0;
var col = {
r: 255,
g: 0,
b: 0
};

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB, 90);
	background(Hue, 90, 90);
	Hue = (Hue + 0.05) % 100;
	//HSB colormode
	//background(255,175,175); PINK BACKGROUND
	{
	//Tic-Tac-Toe lines 
    strokeWeight(20)	
	line(500,70,500,700)
	line(800,70,800,700)
	line(200,250,1100,250)
	line(200,500,1100,500);
	}
}

function draw(){
	fill(value)
	rectangle(700,700,250,500);
}

function keyTyped() {
	
	var qx = mouseX +150;
	var qy = mouseY +50;
	var rx = mouseX;
	var ry = mouseY +150;

  if (key === 'x') {
		fill("#FF00FF");
		noStroke()
    triangle(mouseX, mouseY,qx,qy,rx,ry);
		
	
		}else if (key === 'o'){ 
			fill("#00FF00")
			noStroke()
		ellipse(mouseX,mouseY,100,100);
	}
}

function windowResized(){

    resizeCanvas(windowWidth,windowHeight);
 
}