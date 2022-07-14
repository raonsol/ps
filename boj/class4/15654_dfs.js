const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let [input, nums] = require("fs").readFileSync(inputPath).toString().trim().split("\n");
let [n, m] = input.split(" ").map(Number);
nums = nums
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let visited = new Array(n).fill(false);
let result = "";

const dfs = (depth, visited, str) => {
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      if (depth == m) {
        result += `${str}${nums[i]}\n`;
      } else {
        visited[i] = true;
        dfs(depth + 1, visited, `${str}${nums[i]} `);
        visited[i] = false;
      }
    }
  }
};

dfs(1, visited, "");
console.log(result.trim());
