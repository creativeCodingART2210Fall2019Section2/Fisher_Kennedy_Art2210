


function setup(){

    createCanvas(windowWidth, windowHeight);
    background(0);
 
}
 
function draw(){
 

    fill(250, 118, 222);
    ellipse(mouseX, mouseY, 200, 70);


}



function windowResized(){

    resizeCanvas(windowWidth,windowHeight);
    ellipse(mouseX, mouseY, 200,70);
    background(0);
    //resized it will refresh because background was placed in setup() and windowresized() as well as used
    //ellipse(mouseX&Y) in draw() and windowresized()
 
}