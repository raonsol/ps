const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(inputPath).toString().trim().split("\n");
let [n, m] = input[0].split(" ").map(Number);
let nums = input[1].split(" ").map(Number);
nums.sort((a, b) => a - b);

let ans = "",
  arr = [];
const DFS = (depth, visited) => {
  if (depth === m) {
    ans += arr.join(" ") + "\n";
  } else {
    for (let i of nums) {
      if (visited[i]) continue;
      visited[i] = true;
      arr[depth] = i;
      DFS(depth + 1, visited.slice());
    }
  }
};

let visited = Array(n).fill(false);
DFS(0, visited);
console.log(ans.trim());
ans = "";
