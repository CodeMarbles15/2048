function slide(row) {
  let arr = row.filter(x => x);
  let missing = 4 - arr.length;
  let zeros = Array(missing).fill(0);
  arr = zeros.concat(arr);
  return arr;
}

function combine(row) {
  for (let i = row.length - 1; i >= 0; i--) {
    if (row[i] == row[i - 1]) {
      row[i] = row[i] + row[i - 1]
      score += row[i];
      row[i - 1] = 0;
    }
  }
  return row;
}


function operate(row) {
  row = slide(row);
  row = combine(row);
  row = slide(row);
  return row;
}

function isGameOver(){
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
        if(grid[i][j] == 0){
          return false;
        }
        if(j !== 3 && grid[i][j] === grid[i][j+1]){
          return false;
        }
        if(i !== 3 && grid[i][j] === grid[i+1][j]){
          return false;
        }
      }
    }
  return true;
}


function gameWon(){
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if(grid[i][j] === 2048){
        return true;
      }
    }
  }
  return false;
}
