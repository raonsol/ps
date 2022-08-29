const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(inputPath).toString().trim().split("\n");
const n = Number(input[0]);
const m = Number(input[2]);
let sum = 0;
const numSum = input[1]
  .split(" ")
  .map(Number)
  .map((x) => {
    sum += x;
    return sum;
  });
numSum.unshift(0);

let ans = "";
for (let k = 0; k < m; k++) {
  const [i, j] = input[k + 3].split(" ").map(Number);
  ans += numSum[j] - numSum[i - 1] + "\n";
}
console.log(ans.trim());