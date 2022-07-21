const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [t, ...input] = require("fs").readFileSync(inputPath).toString().trim().split("\n");
let l = 0;
while (l < input.length) {
  let points = input[l].split(" ").map(Number);
  const n = Number(input[l + 1]);
  const start = { x: points[0], y: points[1] };
  const end = { x: points[2], y: points[3] };
  let x,
    y,
    r,
    ans = 0;

  for (let i = 2; i < n + 2; i++) {
    [x, y, r] = input[l + i].split(" ").map(Number);
    let isStart = (start.x - x) ** 2 + (start.y - y) ** 2 < r ** 2;
    let isEnd = (end.x - x) ** 2 + (end.y - y) ** 2 < r ** 2;
    if (isStart ^ isEnd) ans++;
  }
  console.log(ans);
  l += n + 2;
}
