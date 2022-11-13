const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let [...input] = require("fs").readFileSync(inputPath).toString().trim().split("\n");
let [n, s] = input[0].split(" ").map(Number);
let nums = input[1].split(" ").map(Number);
let ans = 0;

const f = (idx, sum) => {
  let newSum = sum + nums[idx];
  if (newSum === s) ans++;
  if (idx === n - 1) return;
  else {
    for (let i = idx + 1; i < n; i++) {
      f(i, newSum);
    }
  }
};

for (let i = 0; i < n; i++) f(i, 0);
console.log(ans);
