const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let [args, ...board] = fs.readFileSync(inputPath).toString().trim().split("\n");
const [n, m] = args.split(" ").map(Number);
board = board.map((x) => x.trim().split(" ").map(Number));

const dy = [1, -1, 0, 0];
const dx = [0, 0, 1, -1];
const dfs = (y, x, depth, visited) => {
  if (depth === 4) return board[y][x];
  let max = 0;
  for (let i = 0; i < 4; i++) {
    let newY = y + dy[i],
      newX = x + dx[i];
    if (newY >= 0 && newY < n && newX >= 0 && newX < m && !visited[y + dy[i]][x + dx[i]]) {
      visited[newY][newX] = true;
      max = Math.max(max, dfs(newY, newX, depth + 1, visited));
      visited[newY][newX] = false;
    }
  }
  return max + board[y][x];
};

// UDLR
const fY = [
  [0, 1, 1, 1],
  [1, 0, 0, 0],
  [1, 0, 1, 2],
  [0, 1, 2, 1],
];
const fX = [
  [1, 0, 1, 2],
  [1, 0, 2, 1],
  [0, 1, 1, 1],
  [0, 0, 0, 1],
];
const checkFxxx = (y, x) => {
  let sum = 0,
    maxSum = 0;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let newY = y + fY[i][j],
        newX = x + fX[i][j];
      if (newY >= 0 && newY < n && newX >= 0 && newX < m) sum += board[newY][newX];
    }
    maxSum = Math.max(maxSum, sum);
    sum = 0;
  }
  return maxSum;
};

let max = 0,
  visited = Array.from(Array(n), () => Array(m).fill(false)),
  fSum;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    fSum = checkFxxx(i, j);
    visited[i][j] = true;
    max = Math.max(max, fSum, dfs(i, j, 1, visited));
    visited[i][j] = false;
  }
}
console.log(max);
