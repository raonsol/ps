const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [N, r, c] = fs.readFileSync(inputPath).toString().trim().split(" ").map(Number);
const n = 2 ** N;
let ans = 0;

const traversal = (y, x, div) => {
  if (div === 1) {
    ans += (r - y) * 2 + (c - x);
  } else {
    let part = JSON.stringify([parseInt((r - y) / div), parseInt((c - x) / div)]);
    if (part === JSON.stringify([0, 0]))
      traversal(y, x, div / 2);
    else if (part === JSON.stringify([0, 1])) {
      ans += div ** 2;
      traversal(y, x + div, div / 2);
    } else if (part === JSON.stringify([1, 0])) {
      ans += div ** 2 * 2;
      traversal(y + div, x, div / 2);
    } else if (part === JSON.stringify([1, 1])) {
      ans += div ** 2 * 3;
      traversal(y + div, x + div, div / 2);
    }
  }
};
traversal(0, 0, n / 2);
console.log(ans);