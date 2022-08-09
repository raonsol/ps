const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let n = fs.readFileSync(inputPath).toString().trim();
n = Number(n);
let ans = 0;
let queens = [];

const dfs = (depth, queens) => {
  for (let x = 0; x < n; x++) {
    let isAval = true;
    for (let q of queens) {
      if (q.x === x || Math.abs(q.x - x) === depth - q.y) {
        isAval = false;
        break;
      }
    }
    if (isAval) {
      if (depth === n - 1) ans++;
      else {
        queens.push({ y: depth, x: x });
        dfs(depth + 1, queens);
        queens.pop();
      }
    }
  }
};

dfs(0, queens);
console.log(ans);

// 백트래킹
// 1번째 칸부터 순서대로 dfs를 통해 탐색
// 만약 놓을 수 있는 자리가 없으면 가지치기
// [y, x]일 때
// 새로 놓는 [i, j]에서 y===i || x===j이거나
// 3,4 => 4, 5 5,6
