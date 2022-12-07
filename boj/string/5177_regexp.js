const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(inputPath).toString().trim().split("\n");
let ans = "";

const reduceStr = (str) =>
  str
    .toLowerCase()
    // 괄호구분 제거
    .replace(/[\[\{\(]/g, "(")
    .replace(/[\}\]\)]/g, ")")
    // 쉼표구분 제거
    .replace(/[,;]/g, ",")
    // 특수부호 앞뒤공백 통일
    .replace(/\s?([().,:])\s?/g, " $1 ")
    // 여러 공백 축소
    .replace(/\s+/g, " ")
    // 앞뒤공백 제거
    .trim();

for (let i = 1; i < input.length; i += 2) {
  ans += `Data Set ${parseInt((i + 1) / 2)}: `;
  ans += reduceStr(input[i]) === reduceStr(input[i + 1]) ? "equal" : "not equal";
  ans += "\n\n";
}
console.log(ans.trim());
