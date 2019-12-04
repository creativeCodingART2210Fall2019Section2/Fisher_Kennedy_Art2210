
  

function setup(){

    createCanvas(windowWidth, windowHeight);
    strokeWeight(5);
 
}
 
function draw(){
    background(204);
    for (var i = 20; i < 400; i += 20) {    //if the i is smaller than 400
        line(i, 0, i + i/2, 80);            //
 
    

    }
}



function windowResized(){

    resizeCanvas(windowWidth,windowHeight);
 
}