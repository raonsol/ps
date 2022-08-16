const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let [tt, ...input] = fs.readFileSync(inputPath).toString().trim().split("\n");
let ans = [];
for (let t = 0; t < tt; t++) {
  let n = Number(input[t * 3]);
  let num = [input[t * 3 + 1], input[t * 3 + 2]];
  num = num.map((x) => x.split(" ").map(Number));

  if (n === 1) ans.push(Math.max(num[0][0], num[1][0]));
  else {
    let dp = Array.from(Array(2), () => Array(n).fill(0));
    for (let i = 0; i < 2; i++) dp[i][0] = num[i][0];
    dp[0][1] = dp[1][0] + num[0][1];
    dp[1][1] = dp[0][0] + num[1][1];
    for (let i = 2; i < n; i++) {
      dp[0][i] = Math.max(dp[1][i - 1], Math.max(dp[0][i - 2], dp[1][i - 2])) + num[0][i];
      dp[1][i] = Math.max(dp[0][i - 1], Math.max(dp[0][i - 2], dp[1][i - 2])) + num[1][i];
    }
    ans.push(Math.max(dp[0][n - 1], dp[1][n - 1]));
  }
}
console.log(ans.join("\n"));

// 경우의 수: 전 칸의 다른 열 or 전전칸 중 열 관계없이 큰 값
