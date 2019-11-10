var Hue = 0;
var col = {
  r: 255,
  g: 0,
  b: 0
};

  

function setup(){

    createCanvas(792, 1224);
 
}
 
function draw(){
  colorMode(HSB, 90);
  background(Hue, 90, 90);
  Hue = (Hue + 0.05) % 100;

  //HSB=colormode 

     //face
        col.r = random(100, 200);
        col.g = 0;
        col.b = random(100.190);
        stroke(col.r,col.g,col.b);
        fill(col.r, col.g,col.b);
        beginShape();
        vertex(492.508,119.542);
        vertex(480.644,233.102);
        vertex(428.102,324.627);
        vertex(404.373,380.559);
        vertex(385.729,429.712);
        vertex(400.983,522.932);
        vertex(434.881,634.797);
        vertex(463.695,716.153);
        vertex(453.525,744.966);
        vertex(423.017,760.22);
        vertex(380.644,780.559);
        vertex(373.864,811.068);
        vertex(412.847,816.153);
        vertex(441.661,817.847);
        vertex(433.186,868.695);
        vertex(417.932,933.102);
        vertex(387.424,965.305);
        vertex(341.661,1009.373);
        vertex(323.017,1058.525);
        vertex(328.102,1100.898);
        vertex(377.254,1070.39);
        vertex(416.237,983.949);
        vertex(455.22,905.983);
        vertex(485.729,780.559);
        vertex(512.847,673.78);
        vertex(517.932,575.475);
        vertex(502.678,470.39);
        vertex(453.525,480.559);
        vertex(409.458,465.305);
        vertex(409.458,426.322);
        vertex(451.831,392.424);
        vertex(473.864,380.559);
        vertex(506.068,377.169);
        vertex(519.677,399.203);
        vertex(539.966,326.322);
        vertex(502.678,334.797);
        vertex(470.475,365.305);
        vertex(443.356,355.136);
        vertex(477.254,328.017);
        vertex(531.492,309.373);
        endShape(CLOSE);
        
        //mouth
        strokeWeight(2);
        stroke('#FF0000');
        fill('#FF0000');
        beginShape();
        vertex(424.712,814.458);
        vertex(395.898,834.797);
        vertex(382.339,863.61);
        vertex(406.068,877.169);
        vertex(341.661,899.203);
        vertex(331.492,933.102);
        vertex(351.831,953.441);
        vertex(399.288,948.356);
        vertex(429.797,904.288);
        vertex(431.492,868.695);
        vertex(443.356,844.966);

        endShape(CLOSE);


        //eye
        strokeWeight(2);
        stroke('#ffffff');
        fill('#ffffff');
        beginShape();
        vertex(463.695,424.627);
        vertex(463.695,467);
        vertex(504.373,443.271);
        endShape(CLOSE);
  
function windowResized(){

    resizeCanvas(windowWidth,windowHeight);
 
}
}