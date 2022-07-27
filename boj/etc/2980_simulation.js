const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(inputPath).toString().trim().split("\n");
const [n, l] = input.shift().split(" ").map(Number);
const light = new Array(l + 1);
for (let i of input) {
  let [d, r, g] = i.split(" ").map(Number);
  light[d] = [r, g];
}

let ans = 0;
for (let i = 1; i <= l; i++) {
  ans++;
  if (light[i]) {
    let cycle = ans % (light[i][0] + light[i][1]);
    if (cycle <= light[i][0]) {
      //빨간불
      ans += light[i][0] - cycle;
    }
  }
}
console.log(ans);