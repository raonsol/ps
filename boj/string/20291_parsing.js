const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let [t, ...input] = fs.readFileSync(inputPath).toString().trim().split("\n");
const extMap = {};
input.forEach((str) => {
  const ext = str.split(".")[1];
  extMap[ext] = extMap[ext] ? extMap[ext] + 1 : 1;
});
let ans = "";
Object.keys(extMap)
  .sort()
  .forEach((key) => {
    ans += `${key} ${extMap[key]}\n`;
  });
console.log(ans.trim());
