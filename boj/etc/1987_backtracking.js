const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let [args, ...board] = fs.readFileSync(inputPath).toString().trim().split("\n");
const [r, c] = args.split(" ").map(Number);
board.map((x) => x.split(""));

let ans = 0;
const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];
const dfs = (y, x, depth, visitedSet, visited) => {
  if (ans === 26) return;
  ans = Math.max(ans, depth);
  for (let i = 0; i < 4; i++) {
    if (
      ans !== 26 &&
      x + dx[i] >= 0 &&
      x + dx[i] < c &&
      y + dy[i] >= 0 &&
      y + dy[i] < r &&
      !visited[(y + dy[i]) * c + (x + dx[i])] &&
      !visitedSet[board[y + dy[i]][x + dx[i]].charCodeAt(0) - "A".charCodeAt(0)]
    ) {
      let charIdx = board[y + dy[i]][x + dx[i]].charCodeAt(0) - "A".charCodeAt(0);
      let idx = (y + dy[i]) * c + (x + dx[i]);
      visitedSet[charIdx] = true;
      visited[idx] = true;
      dfs(y + dy[i], x + dx[i], depth + 1, visitedSet, visited);
      visited[idx] = false;
      visitedSet[charIdx] = false;
    }
  }
};
let visited = new Array(r * c).fill(false);
visited[0] = true;
let visitedSet = new Array(26).fill(false);
visitedSet[board[0][0].charCodeAt(0) - "A".charCodeAt(0)] = true;
dfs(0, 0, 1, visitedSet, visited);
console.log(ans);

// dfs와 set을 사용하여 해결 => set을 사용하면 시간초과, bool 배열 이용
// dfs시 방문여부를 재귀 들어가기 전에 체크해야 시간초과가 안남 (그렇게 안하면 visited를 deep-copy해서 넘겨줘야 한다)
