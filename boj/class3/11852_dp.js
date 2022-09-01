const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let n = fs.readFileSync(inputPath).toString().trim();
n = Number(n);
memo = [[], [1]];
for (let i = 2; i <= n; i++) {
  let targetIdx = i - 1;
  if (!(i % 3)) targetIdx = memo[targetIdx].length < memo[i / 3].length ? i - 1 : i / 3;
  if (!(i % 2)) targetIdx = memo[targetIdx].length < memo[i / 2].length ? targetIdx : i / 2;
  memo.push([i, ...memo[targetIdx]]);
}

console.log(memo[n].length - 1);
console.log(memo[n].join(" "));

// 3으로 나누거나, 2로 나누거나, -1
// 2부터 N까지 올라가며 dp배열 생성,
// 가능한 경우의 수들에 대해 min값을 취해 현재 원소와 더함
