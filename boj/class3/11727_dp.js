const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let n = +fs.readFileSync(inputPath).toString().trim();
let dp = new Array(n + 1);
dp[1] = 1;
dp[2] = 3;
for (let i = 3; i <= n; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2] * 2) % 10007;
}
console.log(dp[n]);

// 1: 1*2, 1가지
// 2: 1*2+1*2, 2*1, 2*2, 3가지
// 3: dp[2] + dp[1]*2
