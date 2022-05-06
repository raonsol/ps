const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// input.txt을 만들어서 입력값 전달

let input = fs.readFileSync(inputPath).toString().split("\n");
input = input.map((x) => x.split(" ").map(Number));
for (let i of input) {
    process.stdout.write(i+" ");
}