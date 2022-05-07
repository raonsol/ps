const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [m, s, x1, x2] = fs.readFileSync(inputPath).toString().split(" ").map(Number);
let flag = false;
let a, c;

// a와 c 구하기
// x1=(a*seed+c)%m
// x2=(a*x1+c)%m
// seed*a+c-x1, x1*a+c-x2 둘다 m의 배수

for (a = 0; a < m; a++) {
  for (c = 0; c < m; c++) {
    if ((s * a + c - x1) % m == 0 && (x1 * a + c - x2) % m == 0) {
      flag = true;
      break;
    }
  }
  if (flag) break;
}
console.log(`${a} ${c}`);
