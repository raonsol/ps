const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let [n, ...board] = fs.readFileSync(inputPath).toString().trim().split("\n");
n = Number(n);
board = board.map((x) => x.trim().split(" ").map(Number));

const collapseU = (board) => {
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      if (board[y][x] === 0) {
        let target = 0;
        for (let k = y; k < n; k++) {
          //빈칸 다음의 숫자를 찾은 경우
          if (board[k][x] !== 0) {
            target = board[k][x];
            board[k][x] = 0;
            break;
          }
        }
        board[y][x] = target;
      }
    }
  }
  return board;
};
const collapseD = (board) => {
  for (let y = n - 1; y >= 0; y--) {
    for (let x = 0; x < n; x++) {
      if (board[y][x] === 0) {
        let target = 0;
        for (let k = y; k >= 0; k--) {
          if (board[k][x] !== 0) {
            target = board[k][x];
            board[k][x] = 0;
            break;
          }
        }
        board[y][x] = target;
      }
    }
  }
  return board;
};
const collapseL = (board) => {
  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      if (board[y][x] === 0) {
        let target = 0;
        for (let k = x; k < n; k++) {
          if (board[y][k] !== 0) {
            target = board[y][k];
            board[y][k] = 0;
            break;
          }
        }
        board[y][x] = target;
      }
    }
  }
  return board;
};
const collapseR = (board) => {
  for (let x = n - 1; x >= 0; x--) {
    for (let y = 0; y < n; y++) {
      if (board[y][x] === 0) {
        let target = 0;
        for (let k = x; k >= 0; k--) {
          if (board[y][k] !== 0) {
            target = board[y][k];
            board[y][k] = 0;
            break;
          }
        }
        board[y][x] = target;
      }
    }
  }
  return board;
};

const U = (board) => {
  board = collapseU(board);
  for (let y = 1; y < n; y++) {
    for (let x = 0; x < n; x++) {
      if (board[y][x] === board[y - 1][x]) {
        board[y - 1][x] *= 2;
        board[y][x] = 0;
      }
    }
  }
  board = collapseU(board);
  return board;
};
const D = (board) => {
  board = collapseD(board);
  for (let y = n - 2; y >= 0; y--) {
    for (let x = 0; x < n; x++) {
      if (board[y][x] === board[y + 1][x]) {
        board[y + 1][x] *= 2;
        board[y][x] = 0;
      }
    }
  }
  board = collapseD(board);
  return board;
};
const L = (board) => {
  board = collapseL(board);
  for (let x = 1; x < n; x++) {
    for (let y = 0; y < n; y++) {
      if (board[y][x] === board[y][x - 1]) {
        board[y][x - 1] *= 2;
        board[y][x] = 0;
      }
    }
  }
  board = collapseL(board);
  return board;
};
const R = (board) => {
  board = collapseR(board);
  for (let x = n - 2; x >= 0; x--) {
    for (let y = 0; y < n; y++) {
      if (board[y][x] === board[y][x + 1]) {
        board[y][x + 1] *= 2;
        board[y][x] = 0;
      }
    }
  }
  board = collapseR(board);
  return board;
};

const getMaxElement = (board) => {
  let max = 0;
  board.forEach((x) => {
    max = Math.max(max, ...x);
  });
  return max;
};

const move = [U, D, L, R];
const dfs = (board, depth) => {
  let max = getMaxElement(board);
  if (depth === 5) return getMaxElement(board);
  for (let func of move) {
    let newBoard = func(board.map((x) => x.slice())); //deep copy
    if (newBoard.join() === board.join()) continue;
    max = Math.max(max, dfs(newBoard, depth + 1));
  }
  return max;
};

let result = dfs(board, 0);
console.log(result);

// const printBoard = (b) => b.map((x) => x.join(" ")).join("\n");

// brute force: max_N === 20, 20^2=400
// 이동가능 방향 4개, 이동횟수 최대 5회, 4^5=2^10=1024
// 1024*400=409,600, 백트래킹 시 더 감소

// 조건1: 같은 값을 갖는 두 블록이 충돌하면 하나로 합쳐짐, 숫자^=2
// 조건2: 한 번의 이동에서 각각의 블록은 한번만 합쳐짐, 재귀 x
// 조건3: 똑같은 수가 홀수개 연속으로 있으면 이동하려고 하는 쪽의 칸이 먼저 합쳐짐

// 합치기 전에 해당 방향으로 숫자를 쌓아 빈칸을 없애주기
// 반복문으로 줄을 훑어 나가면서 이전 줄과 합칠 수 있는 경우 합침
// 다 합치고 나서 중간중간의 빈칸을 다 방향대로 밀기
// 움직여도 결과가 똑같으면 백트래킹
