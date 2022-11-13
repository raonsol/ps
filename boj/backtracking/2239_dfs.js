const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let board = fs.readFileSync(inputPath).toString().trim().split("\n");
board = board.map((x) => x.split("").map(Number));
let avalY = Array.from(Array(9), () => new Array(10).fill(true));
let avalX = Array.from(Array(9), () => new Array(10).fill(true));
let avalS = Array.from(Array(9), () => new Array(10).fill(true));

const sectionN = (y, x) => parseInt(y / 3) * 3 + parseInt(x / 3);
const checkAval = (y, x) => {
  let aval = [];
  for (let n = 1; n < 10; n++) {
    if (avalY[y][n] && avalX[x][n] && avalS[sectionN(y, x)][n]) {
      aval.push(n);
    }
  }
  return aval;
};

for (let y = 0; y < 9; y++) {
  for (let x = 0; x < 9; x++) {
    let target = board[y][x];
    if (!target) continue;

    avalY[y][target] = false;
    avalX[x][target] = false;
    avalS[sectionN(y, x)][target] = false;
  }
}

let ans = null;
const fillBlank = (y, x) => {
  if (y === 9) {
    ans = board;
    return;
  }

  let [nY, nX] = [Math.floor(y + (x + 1) / 9), (x + 1) % 9];
  if (board[y][x]) {
    fillBlank(nY, nX);
  } else {
    let avalList = checkAval(y, x);

    for (let n of avalList) {
      board[y][x] = n;
      avalY[y][n] = false;
      avalX[x][n] = false;
      avalS[sectionN(y, x)][n] = false;
      fillBlank(nY, nX);

      if (ans) break;
      board[y][x] = 0;
      avalY[y][n] = true;
      avalX[x][n] = true;
      avalS[sectionN(y, x)][n] = true;
    }
  }
};
fillBlank(0, 0);

const ansStr = board.map((x) => x.join("")).join("\n");
console.log(ansStr);
