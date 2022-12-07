const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const exp = new RegExp(/[^A-Z|a-z|\-]/g);
let input = fs.readFileSync(inputPath).toString().trim().split(exp);
let ans = "",
  maxLen = 0;
for (let str of input) {
  if (str.length > maxLen) {
    ans = str;
    maxLen = str.length;
  }
}
console.log(ans.toLocaleLowerCase());
