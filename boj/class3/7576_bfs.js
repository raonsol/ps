const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [nums, ...input] = fs.readFileSync(inputPath).toString().trim().split("\n");
const [m, n] = nums.split(" ").map(Number);
let tomato = input.map((x) => x.split(" ").map(Number));

const bfs = () => {
  let q = [],
    fresh = 0;
  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++) {
      if (tomato[i][j] === 1) q.push({ y: i, x: j, day: 0 });
      else if (tomato[i][j] === 0) fresh++;
    }
  if (fresh === 0) return 0;

  const dx = [-1, 0, 1, 0];
  const dy = [0, -1, 0, 1];
  let maxDay = 0,
    qStartIdx = 0;
  while (qStartIdx !== q.length) {
    t = q[qStartIdx++]; //q.shift()로 하면 시간초과
    for (let i = 0; i < 4; i++) {
      let [Y, X] = [t.y + dy[i], t.x + dx[i]];
      let yCond = Y >= 0 && Y < n;
      let xCond = X >= 0 && X < m;
      if (yCond && xCond && tomato[Y][X] === 0) {
        q.push({ y: Y, x: X, day: t.day + 1 });
        tomato[Y][X] = 1;
        if (t.day + 1 > maxDay) maxDay = t.day + 1;
        fresh--;
      }
    }
  }

  if (fresh) return -1;
  else return maxDay;
};

console.log(bfs());
