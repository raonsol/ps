const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let [n, ...paper] = fs.readFileSync(inputPath).toString().trim().split("\n");
n = Number(n);
paper = paper.map((x) => x.split(" "));

const isFilled = (y, x, seed) => {
  let target = paper[y][x];
  for (let i = y; i < y + seed; i++) {
    for (let j = x; j < x + seed; j++) {
      if (paper[i][j] !== target) return false;
    }
  }
  return true;
};

let white = 0,
  blue = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (paper[i][j] === "1") blue++;
    else white++;
  }
}

for (let seed = 2; seed <= n; seed *= 2) {
  for (let y = 0; y < n; y += seed) {
    for (let x = 0; x < n; x += seed) {
      if (isFilled(y, x, seed)) {
        if (paper[y][x] === "1") blue -= 3;
        else white -= 3;
      }
    }
  }
}

console.log(white);
console.log(blue);
