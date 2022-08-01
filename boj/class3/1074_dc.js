const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [N, r, c] = fs.readFileSync(inputPath).toString().trim().split(" ").map(Number);
const n = 2 ** N;
let ans = -1;
const zCheck = (y, x) => {
  for (let i = y; i < y + 2; i++)
    for (let j = x; j < x + 2; j++) {
      ans++;
      if (i === r && j === c) {
        console.log(ans);
        return;
      }
    }
};
const traversal = (y, x, div) => {
  let isTarget = false;
  for (let i = y; i <= r; i += div / 2) {
    for (let j = x; j < x + div; j += div / 2) {
      if (div > 4) {
        if (i + div / 2 > r && i <= r && j + div / 2 > c && j <= c) {
          traversal(i, j, div / 2);
        } else ans += (div * div) / 4;
      } else isTarget = zCheck(i, j);
      if (isTarget) return;
    }
  }
};

if (N > 1) traversal(0, 0, n);
else zCheck(0, 0);
