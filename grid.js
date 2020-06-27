function addNumber() {
  let options = [];
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if (grid[i][j] == 0) {
        options.push({
          x: i,
          y: j
        })
      }
    }
  }

  if (options.length > 0) {
    let spot = random(options)
    let r = random(1)
    grid[spot.x][spot.y] = r > 0.1 ? 2 : 4;
    grid_new[spot.x][spot.y] = 1;
  }

}


function copyGrid(grid) {
  let extra = blankGrid();
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      extra[i][j] = grid[i][j];
    }
  }
  return extra
}

function compare(a, b) {
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if (a[i][j] !== b[i][j]) {
        return true;
      }
    }
  }
  return false;
}

function flipGrid(grid){
  for (var i = 0; i < 4; i++) {
    grid[i].reverse();
  }
  return grid;
}

function rotateGrid(grid){
  let newGrid = blankGrid();
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      newGrid[i][j] = grid[j][i];
    }
  }
  return newGrid;
}
