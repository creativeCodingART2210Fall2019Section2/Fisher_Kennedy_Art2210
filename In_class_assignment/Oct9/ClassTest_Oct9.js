
var circleRadii = [50,100,150,200,250,300];

function setup(){

    createCanvas(windowWidth, windowHeight);
    ellipseMode(CENTER);
    frameRate(2)
    }
    
    function draw() {
      background(0);
      stroke(random(255),random(255), random(255));
      strokeWeight(4);
      fill(0);
      //push();
      for(var i = 0; i < circleRadii.length; i++){
      ellipse(random (1000), random(500), circleRadii[i]);
      }
      //pop();
      
     
    }

//function windowResized(){

    //resizeCanvas(windowWidth,windowHeight);
 
//