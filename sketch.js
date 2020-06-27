let grid = [];
let grid_new = [];
let w = 100;
let score = 0;
let gameover = false;

function blankGrid(){
  return [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];
}

function setup() {
  createCanvas(400, 400);
  noLoop();
  grid = blankGrid();
  grid_new = blankGrid();
  updateCanvas();
  addNumber();
  addNumber();
}

function restart(){
  document.location.href = "";
}


function keyPressed() {
  let flipped = false;
  let rotated = false;
  let played = true;

  if(keyCode == DOWN_ARROW){
    played = true;
  }  else if(keyCode == UP_ARROW){
    grid = flipGrid(grid);
    flipped = true;

  } else if(keyCode == RIGHT_ARROW){
    grid = rotateGrid(grid);
    rotated = true;

  } else if(keyCode == LEFT_ARROW){
    grid = rotateGrid(grid);
    grid = flipGrid(grid);
    rotated = true;
    flipped = true;

  } else if (key = ' '){
    played = false;
    if(gameover){
      grid = blankGrid();
      restart();
      gameover = false;
    }
  } else{
    played = false;
  }
  if(played){

    let past = copyGrid(grid);
    for (var i = 0; i < 4; i++) {
      grid[i] = operate(grid[i]);
    }
    let changed = compare(past, grid);

    if(flipped){
      grid = flipGrid(grid);
    }

    if(rotated){
      grid = rotateGrid(grid);
      grid = rotateGrid(grid);
      grid = rotateGrid(grid);
    }


    if (changed) {
      addNumber();
    }
    updateCanvas();

    let gameover = isGameOver();
    if(gameover){
      console.log("GAME OVER");
      createP("YOU LOST....., PRESS SPACE BAR TO TRY AGAIN")
      gameover = true;
    }
    if(gameWon()){
      console.log("YOU WON!")
      createP("YOU WON, MATE! PRESS SPACE BAR TO TRY AGAIN")
      gameover = true;
    }
  }
}


function updateCanvas() {
  background(255);
  drawGrid();
  select('#score').html(score);
}




function drawGrid() {
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      let val = grid[i][j];
      let s = val.toString();
      if(val !== 0){
        fill(colorsSizes[s].color);
      }else{
        noFill();
      }


      if(grid_new[i][j] == 1){
        stroke(200,0,200);
        strokeWeight(10)
        grid_new[i][j] = 0;
      }else{
        stroke(0);
        strokeWeight(5)
      }

      rect(i * w, j * w, w, w, 30);

      if (grid[i][j] !== 0) {
        textAlign(CENTER, CENTER);
        textSize(colorsSizes[s].size);
        fill(0);
        noStroke();
        text(val, i * w + w / 2, j * w + w / 2);
      }
    }
  }
}
