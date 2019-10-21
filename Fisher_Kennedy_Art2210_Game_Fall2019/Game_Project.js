
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255,175,175);
	{
    strokeWeight(20)	
	line(500,70,500,700)
	line(800,70,800,700)
	line(200,250,1100,250)
	line(200,500,1100,500);
	}
}
function keyTyped() {
	
	var qx = mouseX +150;
	var qy = mouseY +50;
	var rx = mouseX;
	var ry = mouseY +150;

  if (key === 'x') {
		fill(0,255,255);
		noStroke()
    triangle(mouseX, mouseY,qx,qy,rx,ry);
		
	
		}else if (key === 'o'){ 
			fill(255,0,0)
			noStroke()
		ellipse(mouseX,mouseY,100,100);
	}
}