const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let [args, ...board] = fs.readFileSync(inputPath).toString().trim().split("\n");
const [n, m] = args.split(" ").map(Number);
board = board.map((x) => x.trim().split(" ").map(Number));

// 누적합 2차원 배열
let boardSum = Array.from(Array(n + 1), () => Array(m + 1).fill(0));
boardSum[1][1] = board[0][0]; // boardSum에서 -1씩 shift해야 원래 board 좌표
for (let i = 2; i <= n; i++) boardSum[i][1] = board[i - 1][0] + boardSum[i - 1][1];
for (let i = 2; i <= m; i++) boardSum[1][i] = board[0][i - 1] + boardSum[1][i - 1];
for (let i = 2; i <= n; i++)
  for (let j = 2; j <= m; j++)
    boardSum[i][j] =
      boardSum[i - 1][j] + boardSum[i][j - 1] + board[i - 1][j - 1] - boardSum[i - 1][j - 1];

const p32Y = [[0, 1], [0, 2], [1, 2], [0, 1], [0, 2], [1, 2], [0, 2], [2, 0]];
const p32X = [[0, 0], [0, 0], [0, 0], [1, 1], [1, 1], [1, 1], [0, 1], [0, 1]];
const sum32 = (y, x) => {
  let sum =
    boardSum[y + 2][x + 1] -
    boardSum[y + 2][x - 1] -
    boardSum[y - 1][x + 1] +
    boardSum[y - 1][x - 1];
  let partSum = 0, maxSum = 0;
  for (let i = 0; i < 8; i++) {
    partSum = sum;
    partSum -= board[y + p32Y[i][0] - 1][x + p32X[i][0] - 1];
    partSum -= board[y + p32Y[i][1] - 1][x + p32X[i][1] - 1];
    maxSum = Math.max(maxSum, partSum);
  }
  return maxSum;
};
const p23Y = [[0, 0], [0, 0], [0, 0], [1, 1], [1, 1], [1, 1], [0, 1], [0, 1]];
const p23X = [[1, 2], [0, 2], [0, 1], [1, 2], [0, 2], [0, 1], [2, 0], [0, 2]];
const sum23 = (y, x) => {
  let sum =
    boardSum[y + 1][x + 2] -
    boardSum[y + 1][x - 1] -
    boardSum[y - 1][x + 2] +
    boardSum[y - 1][x - 1];
  let partSum = 0, maxSum = 0;
  for (let i = 0; i < 8; i++) {
    partSum = sum;
    partSum -= board[y + p23Y[i][0] - 1][x + p23X[i][0] - 1];
    partSum -= board[y + p23Y[i][1] - 1][x + p23X[i][1] - 1];
    maxSum = Math.max(maxSum, partSum);
  }
  return maxSum;
};

const sum22 = (y, x) =>
  boardSum[y + 1][x + 1] - boardSum[y + 1][x - 1] - boardSum[y - 1][x + 1] + boardSum[y - 1][x - 1];
const sum41 = (y, x) =>
  boardSum[y + 3][x] - boardSum[y + 3][x - 1] - boardSum[y - 1][x] + boardSum[y - 1][x - 1];
const sum14 = (y, x) =>
  boardSum[y][x + 3] - boardSum[y][x - 1] - boardSum[y - 1][x + 3] + boardSum[y - 1][x - 1];

let max = 0;
for (let i = 1; i + 1 <= n; i++) for (let j = 1; j + 2 <= m; j++) max = Math.max(max, sum23(i, j));
for (let i = 1; i + 2 <= n; i++) for (let j = 1; j + 1 <= m; j++) max = Math.max(max, sum32(i, j));
for (let i = 1; i + 1 <= n; i++) for (let j = 1; j + 1 <= m; j++) max = Math.max(max, sum22(i, j));
for (let i = 1; i <= n; i++) for (let j = 1; j + 3 <= m; j++) max = Math.max(max, sum14(i, j));
for (let i = 1; i + 3 <= n; i++) for (let j = 1; j <= m; j++) max = Math.max(max, sum41(i, j));
console.log(max);

// 테트로미노의 종류는 5가지, 회전이나 대칭 가능
// 회전이나 대칭을 모두 고려한 종류는 총 2+1+8+4+4=19개
// 2*3 크기의 테트로미노(정사각 포함)는 2*3 직사각형에서 두 칸을 빼는 걸로 생각 가능
// 2*3 크기에 대한 합을 구하고, 메모해놓은 좌표의 수만 빼주는 식으로 구현, 누적합으로 최적화 가능
