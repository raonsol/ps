const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let n = fs.readFileSync(inputPath).toString().trim().split("");
n = n.map((x) => (+x).toString(2).padStart(4, "0"));
let ans = "";
for (let i = 0; i < 4; i++) {
  let status = [];
  for (let j = 0; j < 4; j++) status.push(n[j][i] === "1" ? "*" : ".");
  ans += `${status[0]} ${status[1]}   ${status[2]} ${status[3]}\n`;
}
console.log(ans.trim());
