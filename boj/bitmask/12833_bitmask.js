const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let n = fs.readFileSync(inputPath).toString().trim().split(" ");
let [a, b, c] = n.map((x) => +x);
if (c % 2) console.log(a ^ b);
else console.log(a);
