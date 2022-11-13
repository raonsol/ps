const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let p = require("fs").readFileSync(inputPath).toString().trim().split("\n");
p = p.map((x) => x.split(" ").map(Number));
let cond = (p[1][0] - p[0][0]) * (p[2][1] - p[0][1]) - (p[2][0] - p[0][0]) * (p[1][1] - p[0][1]);
if (cond > 0) ans = 1;
else if (cond < 0) ans = -1;
else ans = 0;
console.log(ans);
