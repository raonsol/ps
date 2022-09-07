const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let x = (+fs.readFileSync(inputPath).toString().trim()).toString(2).split("");
let cnt = 0;
x.forEach((c) => c === "1" && cnt++);
console.log(cnt);
