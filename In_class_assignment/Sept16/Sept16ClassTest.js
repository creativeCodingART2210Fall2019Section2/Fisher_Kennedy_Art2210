
function setup(){

    createCanvas(windowWidth, windowHeight);
 
}
 
function draw(){
    
    var s = 0;
			s = second();
			print(s);
            print("the current second is" +s);

}



function windowResized(){

    resizeCanvas(windowWidth,windowHeight);
 
}