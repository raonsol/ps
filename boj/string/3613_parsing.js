const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(inputPath).toString().trim();
const isC = input.match(/^[a-z](_?[a-z])*$/);
const isJava = input.match(/^[a-z][^_]*$/);

let ans = input;
if (!(isC || isJava)) {
  ans = "Error!";
} else if (isC) {
  ans = input.replace(/\_+([a-z])/g, (str, c) => c.toUpperCase()).replaceAll("_", "");
} else {
  ans = input.replace(/([A-Z])/g, (c) => `_${c.toLowerCase()}`);
}
console.log(ans);
