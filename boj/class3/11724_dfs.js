const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let [nums, ...input] = fs.readFileSync(inputPath).toString().trim().split("\n");
const [n, m] = nums.split(" ").map(Number);
input = input.map((x) => x.split(" ").map(Number));
let nodes = new Map(),
  visited = new Set();

input.forEach(([u, v]) => {
  if (!nodes.has(u)) nodes.set(u, [v]);
  else nodes.get(u).push(v);
  if (!nodes.has(v)) nodes.set(v, [u]);
  else nodes.get(v).push(u);
});

const traversal = (n) => {
  visited.add(n);
  let connected = nodes.get(n);
  for (let node of connected) {
    if (!visited.has(node)) traversal(node);
  }
};

let ans = 0;
nodes.forEach((value, key) => {
  if (!visited.has(key)) {
    ans++;
    traversal(key);
  }
});

//간선이 없는 정점도 하나의 독립 요소이다
ans += n - nodes.size;

console.log(ans);
