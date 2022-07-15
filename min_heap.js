const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let [n, ...input] = require("fs").readFileSync(inputPath).toString().trim().split("\n");
n = Number(n);
input = input.map(Number);
let output = "";

const heap = {
  data: [0],
  depth: 0,
  push: function (n) {
    if (this.data.length == 1) this.data.push(n);
    else {
      this.data.push(n);
      let idx = this.data.length - 1;
      let pIdx = Math.trunc(idx / 2);
      while (pIdx >= 1 && this.data[pIdx] > this.data[idx]) {
        [this.data[idx], this.data[pIdx]] = [this.data[pIdx], this.data[idx]];
        idx = pIdx;
        pIdx = Math.trunc(idx / 2);
      }
    }
  },
  pop: function () {
    let n = this.data[1];
    if (this.data.length == 1) {
      n = 0;
    } else if (this.data.length == 2) {
      this.data.pop();
    } else {
      this.data[1] = this.data.pop();
      let [idx, cIdx] = [1, 2];
      if (this.data[cIdx] > this.data[cIdx + 1]) cIdx++;
      while (cIdx <= this.data.length && this.data[idx] > this.data[cIdx]) {
        [this.data[idx], this.data[cIdx]] = [this.data[cIdx], this.data[idx]];
        idx = cIdx;
        cIdx *= 2;
        if (this.data[cIdx] > this.data[cIdx + 1]) cIdx++;
      }
    }
    return n;
  },
};

for (let i of input) {
  if (i === 0) output += heap.pop() + "\n";
  else heap.push(i);
}

console.log(output.trim());
