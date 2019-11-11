function setup(){

    createCanvas(windowWidth,windowHeight);
    background(0);
    //Difference between the setup and draw is that the circles with multiply/drag.Also used a background in Setup which is why
    //the circles dragged
 
}
 
function draw(){
    
    fill(0,240,200);
    stroke(100);
    strokeWeight(2);
    ellipse(mouseX, mouseY, 50,50);
    


}










