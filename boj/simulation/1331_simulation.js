const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let move = fs.readFileSync(inputPath).toString().trim().split("\n");
let visited = Array.from(Array(7), () => Array(7).fill(false));
let isValid = true;

const getX = (a) => a.charCodeAt(0) - "A".charCodeAt(0) + 1;
const getY = (a) => a.charCodeAt(1) - "0".charCodeAt(0);

const isValidMove = (a, b) => {
  a = { x: getX(a), y: getY(a) };
  b = { x: getX(b), y: getY(b) };
  if (
    (Math.abs(b.x - a.x) === 1 && Math.abs(b.y - a.y) === 2) ||
    (Math.abs(b.x - a.x) === 2 && Math.abs(b.y - a.y) === 1)
  )
    return true;
  else return false;
};

for (let i = 1; i < 36; i++) {
  let [x, y] = [getX(move[i]), getY(move[i])];
  if (visited[y][x] || !isValidMove(move[i - 1], move[i])) {
    isValid = false;
    break;
  }
  visited[y][x] = true;
}
if (!isValidMove(move[35], move[0])) isValid = false;

let ans = isValid ? "Valid" : "Invalid";
console.log(ans);

//7자리 이상은 자름

// 1. 각 칸을 정확히 한 번씩 방문
// 2. 나이트의 이동방법(직진후 대각선) 준수
// 3. 마지막에 시작점으로 돌아갈 수 있어야 함

// 체스판 boolean 배열로 방문여부 체크, 알파벳은 index로 치환
// 나이트 이동경로 체크하는 함수 만들기
//
