var Hue = 0;
var col = {
}
function setup() {
    createCanvas(windowWidth,windowHeight);
    angleMode(DEGREES);
  }
  
  function draw() {
    
    colorMode(HSB, 90); //Hue,Saturation, and brightness 
    background(Hue, 90, 90);
    Hue = (Hue + 0.05) % 100;
    translate(500, 500); //moves the point of origin 
    rotate(-90);
  
    let hr = hour();
    let min = minute();
    let sec = second();


    //Hour controls
	strokeWeight(12);
	noFill();
	let end = map(hr % 12, 0, 12, -90, 360);
	stroke(255,100,40);
	arc (200, 200, 260, 260, 0, end);

	
	push();
	strokeWeight(4);
	rotate(end);
	line(0,0, 100, 0);  //0,0,110,0
	pop();
	
	
	//Minute controls
	strokeWeight(8);
	noFill();
	let end2 = map(min, 0, 60, 0, 360);
	stroke(25,150,255);
	arc (200, 200, 280, 280, 0, end2);
	
	
	push(); //Add items to the end of an array
	strokeWeight(4);
	rotate(end2);
	line(0,0, 130, 0); //0,0,130,0
	pop(); //Remove an item from the end of an array
	
	
	//Second Controls
	strokeWeight(10);
	noFill();
	let end3 = map(sec, 0, 60, 0, 360); //maps creates a new array, mapping is showing 0 to 60 minutes at 360 degrees
	stroke(255,255,255);
	arc (200, 200, 300, 300, 0, end3);
	
	
	push();
	strokeWeight(4);
	rotate(end3);
	line(0,0, 150, 0); //0,0,150,0
	pop();
  }

    	


function windowResized(){

    resizeCanvas(windowWidth,windowHeight);
  
  }