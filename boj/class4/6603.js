const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(inputPath).toString().trim().split("\n");
input = input.map((x) => x.split(" ").map(Number));

let ans = "",
  arr = [];
const DFS = (depth, s, visited) => {
  if (depth === 6) {
    ans += arr.join(" ") + "\n";
  } else {
    for (let i of s) {
      if (visited[i]) continue;
      visited[i] = true;
      arr[depth] = i;
      DFS(depth + 1, s, visited.slice());
    }
  }
};

for (let t = 0; t < input.length - 1; t++) {
  let k = input[t][0];
  let s = input[t].slice(1);
  let visited = Array(k).fill(false);
  DFS(0, s, visited);
  console.log(ans.trim() + "\n");
  ans = "";
}
