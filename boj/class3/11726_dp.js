const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let n = require("fs").readFileSync(inputPath).toString().trim().split("\n");
n = Number(n);

// 문제 단순화: width만 보기, 1칸이냐 2칸이냐의 문제
// === n을 1과 2의 합으로 나타내는 경우의 수
// 1: 1 (1)
// 2: 1+1, 2 (2)
// 3=1+2(2)=2+1(1), (3)
// 4=1+2(2)=2+2(2), (4)

let dp = new Array(n + 1).fill(0);
dp[1] = 1;
dp[2] = 2;
const calcDP = (n) => {
  if (n <= 2) return (dp[n] = n);
  else if (dp[n] !== 0) return dp[n];
  else {
    return (dp[n] = (calcDP(n - 1) + calcDP(n - 2)) % 10007);
  }
};

console.log(calcDP(n));
