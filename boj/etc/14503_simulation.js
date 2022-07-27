const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = require("fs").readFileSync(inputPath).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
let [r, c, d] = input[1].split(" ").map(Number);
let oMap = input.slice(2).map((x) => x.split(" ").map(Number));
let cMap = input.slice(2).map((x) => x.split(" ").map(Number));
let ans = 0;

const isR = (arr, y, x) => {
  return x + 1 < m && arr[y][x + 1] === 0;
};
const isL = (arr, y, x) => {
  return x - 1 >= 0 && arr[y][x - 1] === 0;
};
const isU = (arr, y, x) => {
  return y - 1 >= 0 && arr[y - 1][x] === 0;
};
const isD = (arr, y, x) => {
  return y + 1 < n && arr[y + 1][x] === 0;
};

const conditions = [isU, isR, isD, isL];

const canBack = (y, x, dir) => {
  if (conditions[(4 + (dir - 2)) % 4](oMap, y, x)) return true;
  else return false;
};

const canMove = (y, x, dir) => {
  let flag = false;
  for (let i = 1; i <= 4; i++) {
    if (conditions[(4 + (dir - i)) % 4](cMap, y, x)) {
      flag = (4 + (dir - i)) % 4;
      break;
    }
  }
  return flag;
};

const print = (arr) => {
  let arg = "";
  for (let i of arr) {
    for (let j of i) arg += `${j} `;
    arg += "\n";
  }
  console.log(arg);
};

let dir,
  isBack = false;
// d = (d + 3) % 4;
while ((dir = canMove(r, c, d)) !== false || (isBack = canBack(r, c, d))) {
  if (dir === false && isBack) {
    // 후진하는 경우
    d = (d + 2) % 4;
  } else d = dir;

  if (cMap[r][c] === 0) {
    ans++;
    cMap[r][c] = 1;
  }

  if (d === 0) r--;
  else if (d === 1) c++;
  else if (d === 2) r++;
  else if (d === 3) c--;

  if (dir === false && isBack) d = (d + 2) % 4; // 후진일 경우 원래 방향으로 복귀
  // print(cMap);
  // console.log(r, c, d);
}

if (ans === 0 && oMap[r][c] === 0) ans = 1;
else if (cMap[r][c] === 0) ans++;

console.log(ans);
