const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let [args, ...maze] = fs.readFileSync(inputPath).toString().trim().split("\n");
const [n, m] = args.split(" ").map(Number);
maze = maze.map((x) => x.split(""));
let startLoc, foundStartLoc = false;
maze.forEach((row, y) =>
  row.forEach((elem, x) => {
    if (elem === "0") {
      startLoc = { y: y, x: x };
      foundStartLoc = true;
      return;
    }
    if (foundStartLoc) return;
  })
);

const dy = [1, 0, -1, 0];
const dx = [0, 1, 0, -1];
const canMove = (y, x, visited) =>
  y >= 0 && x >= 0 && y < n && x < m && !visited[y][x] && maze[y][x] !== "#";
const isDoor = (x) => x >= "A".codePointAt(0) && x <= "F".codePointAt(0);
const isKey = (x) => x >= "a".codePointAt(0) && x <= "f".codePointAt(0);
const bfs = (y, x) => {
  let q = [];
  let visited = Array.from(Array(1 << 6),
    () => Array.from(Array(n), () => Array(m).fill(false)));
  let minCnt = Number.MAX_SAFE_INTEGER, frontIdx = 0, foundOut = false;
  q.push({ y: y, x: x, key: 0, cnt: 0 });
  while (frontIdx < q.length) {
    let loc = q[frontIdx++];
    for (let i = 0; i < 4; i++) {
      let cur = { y: loc.y + dy[i], x: loc.x + dx[i], key: loc.key, cnt: loc.cnt };
      if (canMove(cur.y, cur.x, visited[cur.key])) {
        visited[cur.key][cur.y][cur.x] = true;
        let curChar = maze[cur.y][cur.x], curCode = curChar.codePointAt(0);
        if (curChar === "1") {
          minCnt = Math.min(minCnt, cur.cnt + 1);
          foundOut = true;
        } else if (curChar === "." || curChar === "0") {
          q.push({ ...cur, cnt: cur.cnt + 1 });
        } else if (isKey(curCode)) {
          let newKeyStatus = cur.key | 1 << (curCode - "a".codePointAt(0));
          visited[newKeyStatus][cur.y][cur.x] = true;
          q.push({ ...cur, key: newKeyStatus, cnt: cur.cnt + 1 });
        } else if (
          isDoor(curCode) &&
          (cur.key & (1 << (curCode - "A".codePointAt(0))))
        ) q.push({ ...cur, cnt: cur.cnt + 1 });
      }
    }
  }
  return foundOut ? minCnt : false;
};

let ans = bfs(startLoc.y, startLoc.x);
console.log(ans ? ans : -1);

// 입구는 하나, 출구는 여러개 존재 가능
// 열쇠는 없을 수도 있고 여러개일 수도 있음
// 한번 방문한 칸을 다시 방문 가능 => 열쇠의 존재 때문
// bfs로 미로탐색
// 하나의 state에는 열쇠 유무를 저장하는 bitmask 보유
// visited 배열을 bitmask 경우의 수 (1<<6)개만큼 생성
// 열쇠를 획득하면 해당 상태의 visited 배열로 전환해서 계속 카운트
