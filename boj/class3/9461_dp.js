const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let [t, ...n] = fs.readFileSync(inputPath).toString().trim().split("\n");
n = n.map(Number);
let memo = [0, 1, 1, 1, 2, 2];
let padovan = (n) => {
  if (memo[n]) return memo[n];
  return (memo[n] = padovan(n - 5) + padovan(n - 1));
};

let ans = "";
n.forEach((x) => {
  if (memo.length < x + 1) padovan(x);
  ans += memo[x] + "\n";
});
console.log(ans.trim());
