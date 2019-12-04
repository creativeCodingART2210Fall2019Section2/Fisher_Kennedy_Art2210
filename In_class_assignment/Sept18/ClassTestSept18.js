


function setup() {
createCanvas(windowWidth,windowHeight);

}
function draw() {
    
    background(0);

    if (mouseIsPressed) {
        fill(0);
        } else {
        fill(255);
        }
        ellipse(300, 300, 150+sin(frameCount), 200);
       


    

}


function windowResized(){

    resizeCanvas(windowWidth,windowHeight);
 
}