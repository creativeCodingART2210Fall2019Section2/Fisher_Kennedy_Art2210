function setup(){

    createCanvas(windowWidth,windowHeight);
    colorMode(HSB, height, height, height);
    
 
}
 
function draw(){
    
    background(0);
    for (var y = 32; y <= height; y += 8) {
    for (var x = 12; x <= width; x += 15) {
    ellipse(x + y, y, 16 - y/10.0, 16 - y/10.0);
    fill(mouseY, height, height);
    variableEllipse(mouseX, mouseY, pmouseX, pmouseY);
    }
}
}




function drawEllipse1(){

    strokweight(4);
    fill(255,204,0);
    ellipse(windowWidth/3, windowHeight/2, 100, 55);
    ellipse(windowWidth/2, windowHeight/3, 100, 55);
}

function drawEllipse2(){

    strokeweight(1);
    fill(mouseY, height, height);
    ellipse(windowwidth/2, windowHeight/2, 100, 55);
}



function windowResized(){

    resizeCanvas(windowWidth,windowHeight);
 
}