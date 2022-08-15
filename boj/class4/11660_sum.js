const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let [args, ...input] = fs.readFileSync(inputPath).toString().trim().split("\n");
let [n, m] = args.split(" ").map(Number);

let table = [];
for (let i = 0; i < n; i++) {
  let tmp = input[i].split(" ").map(Number);
  tmp.unshift(0);
  table.push(tmp);
}
let sumTable = new Array(n * (n + 1));
let sum = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n + 1; j++) {
    sum += table[i][j];
    sumTable[(n + 1) * i + j] = sum;
  }
  sum = 0;
}

let ans = "";
for (let t = n; t < n + m; t++) {
  // 헷갈리므로 문제에서 y와 x를 바꿔서 입력받기
  let [y1, x1, y2, x2] = input[t].split(" ").map(Number);
  sum = 0;
  for (let i = y1; i <= y2; i++) {
    sum += sumTable[(i - 1) * (n + 1) + x2] - sumTable[(i - 1) * (n + 1) + x1 - 1];
  }
  ans += `${sum}\n`;
}
console.log(ans.trim());

// 줄별로 누적합 구하기
// (1,1)===1, (2,2)===7, (3,4)===14, n===4
// (y-1)*(n+1)+x
