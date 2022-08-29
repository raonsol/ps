const { setDefaultResultOrder } = require("dns");
const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let [t, ...num] = fs.readFileSync(inputPath).toString().trim().split("\n");
t = Number(t);
num = num.map(Number);

let prime = new Array(Math.max(...num)).fill(true);

// get prime numbers
for (let n = 2; n < prime.length; n++) {
  if (!prime[n]) continue;
  for (let mul = 2; n * mul < prime.length; mul++) {
    prime[n * mul] = false;
  }
}

let ans = "";
num.forEach((x) => {
  let a,
    b,
    end = parseInt(x / 2);
  for (let i = 2; i <= end; i++) {
    if (prime[i] && prime[x - i]) [a, b] = [i, x - i];
  }
  ans += `${a} ${b}\n`;
});
console.log(ans.trim());

// 에라토스테네스의 체로 10000까지의 소수 계산
// n에 대해 2부터 증가시키며 파티션 값 계산
// 파티션을 찾았더라도 저장해 놓고 n/2까지 계속 계산 (가장 작은 차이의 소수쌍 계산))