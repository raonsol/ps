const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let [n, ...input] = fs.readFileSync(inputPath).toString().trim().split("\n");
input = input.map((x) => x.split(" ").map(Number));

let nodeMap = new Map();
for (let i of input) {
  if (!nodeMap.has(i[0])) nodeMap.set(i[0], [i[1]]);
  else nodeMap.get(i[0]).push(i[1]);
  if (!nodeMap.has(i[1])) nodeMap.set(i[1], [i[0]]);
  else nodeMap.get(i[1]).push(i[0]);
}

let parentArr = new Array(n + 1);
const traversal = (n, parent) => {
  let target = nodeMap.get(n);
  for (let node of target) {
    if (node !== parent) {
      parentArr[node] = n;
      traversal(node, n);
    }
  }
};
traversal(1, 0);

let ans = "";
for (let i = 2; i <= n; i++) {
  if (parentArr[i]) ans += `${parentArr[i]}\n`;
}
console.log(ans.trim());
