const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let [t, ...input] = require("fs").readFileSync(inputPath).toString().trim().split("\n");
t = Number(t);
input.map(Number);
let dp = new Array(11).fill(0);
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;
const calcDP = (n) => {
  if (dp[n] !== 0) return dp[n];
  else {
    return (dp[n] = calcDP(n - 1) + calcDP(n - 2) + calcDP(n - 3));
  }
};

let output = "";
for (let i of input) {
  output += (dp[i] === 0 ? calcDP(i) : dp[i]) + "\n";
}
console.log(output.trim());
