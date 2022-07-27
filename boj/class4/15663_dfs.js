const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(inputPath).toString().trim().split("\n");
let [n, m] = input[0].split(" ").map(Number);
let nums = input[1].split(" ").map(Number);
nums.sort((a, b) => a - b);

let ans = "",
  arr = [],
  arrSet = new Set();
const DFS = (depth, visited) => {
  if (depth === m) {
    if (!arrSet.has(arr.join(" "))) {
      ans += arr.join(" ") + "\n";
      arrSet.add(arr.join(" "));
    }
  } else {
    for (let i = 0; i < n; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      arr[depth] = nums[i];
      DFS(depth + 1, visited);
      visited[i] = false;
    }
  }
};

let visited = Array(n).fill(false);
DFS(0, visited);
console.log(ans.trim());
