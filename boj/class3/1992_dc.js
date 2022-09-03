const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let [N, ...pic] = fs.readFileSync(inputPath).toString().trim().split("\n");
N = Number(N);
pic = pic.map((x) => x.split(""));

const checkNum = (y, x, width) => {
  let target = pic[y][x];
  for (let i = y; i < y + width; i++)
    for (let j = x; j < x + width; j++) if (pic[i][j] !== target) return false;
  return true;
};

const dy = [(n) => 0, (n) => 0, (n) => n / 2, (n) => n / 2];
const dx = [(n) => 0, (n) => n / 2, (n) => 0, (n) => n / 2];
const divSquare = (y, x, size) => {
  if (checkNum(y, x, size)) return pic[y][x];
  let result = "(";
  for (let i = 0; i < 4; i++) {
    result += divSquare(y + dy[i](size), x + dx[i](size), size / 2);
  }
  return result + ")";
};
let ans = divSquare(0, 0, N);

console.log(ans);

// 모두 같은 숫자일 때까지 LU, RU, LD, RD 순으로 4등분
// 한 변의 길이 N에 대해서 재귀 시작
// N*N이 같은 숫자가 아니면 N/2크기에 대해 재귀해서 숫자 검사
// (y, x)에 대한 재귀 좌표: (y, x), (y, x+N/2), (y+N/2, x), (y+N/2, x+N/2)
// 같은 숫자일 경우 해당 숫자 return
