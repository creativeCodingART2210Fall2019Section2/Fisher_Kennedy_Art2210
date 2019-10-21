var radius = 150;
var x = 0;
var y = 0;
var speed = 2.0;
var direction = 1; 
var gravity = 0.2; 
var ball ={
    x: 100,
    y: 100,
    xspeed: 5,
    yspeed: 4
}
var move = ball;


function setup(){

    createCanvas(windowWidth, windowHeight);
    ellipseMode(RADIUS);

 
}
 
function draw(){
    background(0);
    move();
    bounce();
    display();

function move(){
    x += speed;
    if (x > width){
        speed = -5;
    }

        y = y + speed;
	    speed = speed + gravity;
	
	    if (y>height){
		speed = speed * -0.5;
		
        y= height;
        }


}

function bounce(){

}

function display(){

}
        background(0);
        strokeWeight(2);
        stroke(0);
        ellipse(x, 100, ball.x, ball.y);

       // ellipse(x, 45, 50, 50);
       // }
        //x += speed * direction;
       // if ((x > width-radius) || (x < radius)) {
       // direction = -direction; // Flip direction
       // }
       // if (direction == 1) {
       // arc(x, 60, radius, radius, 0.52, 5.76); // Face right
       // } else {
       // arc(x, 60, radius, radius, 3.67, 8.9); // Face left
        }
        
    



function windowResized(){

    resizeCanvas(windowWidth,windowHeight);
 
}