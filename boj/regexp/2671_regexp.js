const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(inputPath).toString().trim();
const exp = new RegExp(/^(100+1+|01)+$/);
let ans = input.match(exp) ? "SUBMARINE" : "NOISE";
console.log(ans);
