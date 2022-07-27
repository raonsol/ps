const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(inputPath).toString().trim().split("\n");
let [n, m] = input[0].split(" ").map(Number);
let nums = input[1].split(" ").map(Number);
nums.sort((a, b) => a - b);

let ans = "",
  arr = [],
  arrSet = new Set();
const DFS = (depth, start) => {
  if (depth === m) {
    if (!arrSet.has(arr.join(" "))) {
      ans += arr.join(" ") + "\n";
      arrSet.add(arr.join(" "));
    }
  } else {
    for (let i = start; i < n; i++) {
      arr[depth] = nums[i];
      DFS(depth + 1, i);
    }
  }
};

DFS(0, 0);
console.log(ans.trim());
