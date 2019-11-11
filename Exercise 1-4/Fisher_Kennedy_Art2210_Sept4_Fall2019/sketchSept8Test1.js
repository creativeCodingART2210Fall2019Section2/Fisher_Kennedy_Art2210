
function setup(){

    createCanvas(windowWidth,windowHeight);
    

    
 
}
 
function draw(){
    background(0);
    fill(0,240,200);
    stroke(100);
    strokeWeight(2);
    ellipse(mouseX, mouseY, 50,50);
    // used the draw function
 
}






function windowResized(){

    resizeCanvas(windowWidth,windowHeight);

 
}
