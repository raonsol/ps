const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let [args, ...mine] = fs.readFileSync(inputPath).toString().trim().split("\n");
const [r, c] = args.split(" ").map(Number);
mine = mine.map((x) => [...x].map(Number));
let dp = Array.from(Array(r), () => new Array(c));

const searchLU = (y, x) => {
  let cnt = 0;
  while (y >= 0 && x >= 0) {
    if (mine[y][x] === 0) break;
    cnt++;
    y--;
    x--;
  }
  return cnt;
};
const searchLD = (y, x) => {
  let cnt = 0;
  while (y < r && x >= 0) {
    if (mine[y][x] === 0) break;
    cnt++;
    y++;
    x--;
  }
  return cnt;
};
const searchRU = (y, x) => {
  let cnt = 0;
  while (y >= 0 && x < c) {
    if (mine[y][x] === 0) break;
    cnt++;
    y--;
    x++;
  }
  return cnt;
};
const searchRD = (y, x) => {
  let cnt = 0;
  while (y < r && x < c) {
    if (mine[y][x] === 0) break;
    cnt++;
    y++;
    x++;
  }
  return cnt;
};

const findDiamondSize = (y, x, limit) => {
  let len = Math.min(dp[y][x].RD, dp[y][x].LD);
  if (len <= limit) return 0;
  do {
    if (
      y + (len - 1) * 2 < r &&
      dp[y + (len - 1) * 2][x].LU >= len &&
      dp[y + (len - 1) * 2][x].RU >= len
    )
      break;
  } while (--len && len > limit);
  return len;
};

for (let y = 0; y < r; y++)
  for (let x = 0; x < c; x++)
    dp[y][x] = { LU: searchLU(y, x), LD: searchLD(y, x), RU: searchRU(y, x), RD: searchRD(y, x) };

let max = 0;
for (let y = 0; y < r; y++) {
  for (let x = 0; x < c; x++) {
    max = Math.max(max, findDiamondSize(y, x, max));
  }
}
console.log(max);
