const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let [args, ...input] = fs.readFileSync(inputPath).toString().trim().split("\n");
const [n, m] = args.split(" ").map(Number);
const graph = Array.from(Array(n + 1), () => Array(n + 1).fill(false));
const connectedCnt = new Array(n + 1).fill(0);

for (let line of input) {
  const [num, ...vertice] = line.split(" ").map(Number);
  for (let i = 1; i < num; i++) {
    if (!graph[vertice[i - 1]][vertice[i]]) {
      connectedCnt[vertice[i]]++;
      graph[vertice[i - 1]][vertice[i]] = true;
    }
  }
}

let q = [],
  qStart = 0;
for (let i = 1; i <= n; i++) {
  if (!connectedCnt[i]) q.push(i);
}

while (q.length != qStart) {
  const target = q[qStart++];
  for (let i = 1; i <= n; i++) {
    if (graph[target][i]) {
      graph[target][i] = false;
      connectedCnt[i]--;
      if (!connectedCnt[i]) q.push(i);
    }
  }
}
const ans = q.length == n ? q.join("\n").trim() : "0";
console.log(ans);
