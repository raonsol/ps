const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let [args, ...input] = fs.readFileSync(inputPath).toString().trim().split("\n");
const [n, m] = args.split(" ").map(Number);
const inboundSet = Array.from(Array(n + 1), () => new Set());
const outboundSet = Array.from(Array(n + 1), () => new Set());

for (let line of input) {
  const [v1, v2] = line.split(" ").map(Number);
  inboundSet[v2].add(v1);
  outboundSet[v1].add(v2);
}

let q = [],
  qStart = 0;
for (let i = 1; i <= n; i++) if (!inboundSet[i].size) q.push(i);

while (q.length != qStart) {
  const target = q[qStart++];
  for (let i of outboundSet[target]) {
    if (inboundSet[i].size === 1) {
      q.push(i);
    } else inboundSet[i].delete(target);
  }
}
console.log(q.join("\n").trim());
