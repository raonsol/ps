const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [n, ...ings] = fs.readFileSync(inputPath).toString().trim().split("\n");
let ss = [], bb = [];
ings.forEach((x, idx) => ([ss[idx], bb[idx]] = x.split(" ").map(Number)));
let min = 10 ** 10;
for (let i = 1; i < 1 << n; i++) {
  let s = 1, b = 0;
  i.toString(2)
    .padStart(10, "0")
    .split("")
    .reverse()
    .forEach((x, idx) => {
      if (x === "1") {
        s *= ss[idx];
        b += bb[idx];
      }
    });
  min = Math.min(min, Math.abs(s - b));
}
console.log(min);
