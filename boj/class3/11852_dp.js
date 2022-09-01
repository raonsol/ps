const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let n = fs.readFileSync(inputPath).toString().trim();
n = Number(n);
let memo = [0, 1];
for (let i = 2; i <= n; i++) {
  memo[i] = memo[i - 1] + 1;
  if (!(i % 3)) memo[i] = Math.min(memo[i], memo[i / 3] + 1);
  if (!(i % 2)) memo[i] = Math.min(memo[i], memo[i / 2] + 1);
}

let i = n, ans = "";
while (i !== 1) {
  ans += `${i} `;
  if (memo[i] === memo[i - 1] + 1) i -= 1;
  else if (memo[i] === memo[i / 3] + 1) i /= 3;
  else if (memo[i] === memo[i / 2] + 1) i /= 2;
}
ans += "1\n";

console.log(memo[n] - 1);
console.log(ans.trim());

// 3으로 나누거나, 2로 나누거나, -1
// 2부터 N까지 올라가며 dp배열 생성,
// 가능한 경우의 수들에 대해 min값을 취해 현재 원소와 더함
