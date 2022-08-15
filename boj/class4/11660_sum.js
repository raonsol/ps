const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let [args, ...input] = fs.readFileSync(inputPath).toString().trim().split("\n");
let [n, m] = args.split(" ").map(Number);

let table = new Array(n+1);
let sumTable = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
for (let i = 1; i <= n; i++) {
  table[i] = [0, ...input[i - 1].split(" ").map(Number)];
  for (let j = 1; j <= n; j++)
    sumTable[i][j] = sumTable[i - 1][j] + sumTable[i][j - 1] - sumTable[i - 1][j - 1] + table[i][j];
}

let ans = [];
for (let t = n; t < n + m; t++) {
  // 헷갈리므로 문제에서 y와 x를 바꿔서 입력받기
  let [y1, x1, y2, x2] = input[t].split(" ").map(Number);
  ans.push(sumTable[y2][x2] - sumTable[y2][x1 - 1] - sumTable[y1 - 1][x2] + sumTable[y1 - 1][x1 - 1]);
}
console.log(ans.join('\n'));

// (1,1)부터 (x, y)까지의 누적합 표 만들어 놓기
// (x, y)는 (x-1, y)+(x, y-1)-(x-1, y-1)
// (a, b)부터 (x, y)까지의 합은
// sumTable[x][y]-sumTable[x][b-1]-sumTable[a-1][y]+sumTable[a-1][b-1]