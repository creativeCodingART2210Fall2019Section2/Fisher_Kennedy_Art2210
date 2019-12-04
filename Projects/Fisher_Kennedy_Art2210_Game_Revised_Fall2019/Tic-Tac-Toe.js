var grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
    ]
  
  var turn = 2    //Players that can play
  var win = false
  var winner = ""
  
  function setup() {
    createCanvas(600,600);
    background(100);
  }
  
  function draw() {
    for (var i=0; i < 3; i++){
      for (var j=0; j < 3; j++){
        fill(255)
        rect(i*200,j*200,200,200)
        textSize(32)
        
        if (grid[j][i] == "O"){
          fill(255,0,0)
        }
        else if (grid[j][i] == "X"){
          fill(0,0,255)
        }
        else{
          fill(255)
        }
        text(grid[j][i], i*200 + 100,j*200 + 100)
        
        if ((grid[0][i] == grid[1][i] && grid[0][i] == grid[2][i]) || (grid[j][0] == grid[j][1] && grid[j][0] == grid[j][2]) || (grid[0][0] == grid[1][1] && grid[1][1] == grid[2][2]) || (grid[2][0] == grid[1][1] && grid[1][1] == grid[0][2])){
          if (win == false){
            if (turn == 2){
                winner = "X"
            }
            else {
                winner = "O"
            }
            win = true
          }
        }
      }
    }
    if (win == true){
      fill(color(10, 255, 10))
      textSize(64)
      text(winner + " wins", 200, 250)
    }
  }
  
  function mousePressed() {
    if (win == false){
      clickX = floor(mouseX/200)
      clickY = floor(mouseY/200)
  
      if (grid[clickY][clickX] != "X" && grid[clickY][clickX] != "O"){
        if (turn == 1) {
          grid[clickY][clickX] = "X"
        }
        else {
          grid[clickY][clickX] = "O"
        }
        if (turn == 1){
          turn = 2
        }
        else {
          turn = 1
        }
      }
    }
  }


  //Things I need to add
  // Figure out how to make the game centered and larger
