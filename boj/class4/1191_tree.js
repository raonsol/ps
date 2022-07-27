const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let [n, ...input] = fs.readFileSync(inputPath).toString().trim().split("\n");
n = Number(n);
input = input.map((x) => x.split(" "));
input.sort();

class Node {
  constructor(val) {
    this.val = val;
    this.l = null;
    this.r = null;
  }
  setLChild(l) {
    this.l = new Node(l);
  }
  setRChild(r) {
    this.r = new Node(r);
  }
}

const searchNode = (n, node) => {
  let result = null;
  if (node.val === n) result = node;
  else {
    if (node.l) result = searchNode(n, node.l);
    if (!result && node.r) result = searchNode(n, node.r);
  }
  return result;
};

let root = new Node(input[0][0]);
if (input[0][1] !== ".") root.setLChild(input[0][1]);
if (input[0][2] !== ".") root.setRChild(input[0][2]);
input.shift();
for (let i of input) {
  let target = searchNode(i[0], root);
  if (i[1] !== ".") target.setLChild(i[1]);
  if (i[2] !== ".") target.setRChild(i[2]);
}

// 1: in, 2: mid, 3: out
const traversal = (mode, node) => {
  if (!node) return "";

  let result = "";
  if (mode === 1) {
    result += node.val;
    result += traversal(mode, node.l);
    result += traversal(mode, node.r);
  } else if (mode === 2) {
    result += traversal(mode, node.l);
    result += node.val;
    result += traversal(mode, node.r);
  } else if (mode === 3) {
    result += traversal(mode, node.l);
    result += traversal(mode, node.r);
    result += node.val;
  }

  return result;
};

for (let i = 1; i <= 3; i++) console.log(traversal(i, root));
