const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let [n, ...input] = fs.readFileSync(inputPath).toString().trim().split("\n");
const exp = new RegExp(/^[A-F]?A+F+C+[A-F]?$/);
let ans = "";
for (let i of input) {
  ans += i.match(exp) ? "Infected!" : "Good";
  ans += "\n";
}

console.log(ans.trim());
