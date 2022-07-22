const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = require("fs").readFileSync(inputPath).toString().trim();
input = Number(input);
let cnt = 1,
  lineNum = 1;
while (cnt < input) cnt += ++lineNum;
let a = cnt - input + 1,
  b = lineNum - a + 1;
let ans = lineNum % 2 ? `${a}/${b}` : `${b}/${a}`;
console.log(ans);

// n번째 지그재그 줄의 개수 ==n
// n번째 지그재그 줄의 수의 합==n+1
// 홀수줄=오름차순, 짝수줄=내림차순
