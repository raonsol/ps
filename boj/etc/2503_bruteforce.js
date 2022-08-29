const { setDefaultResultOrder } = require("dns");
const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let [t, ...num] = fs.readFileSync(inputPath).toString().trim().split("\n");
t = Number(t);
let ans = new Set();
for (let n = 123; n <= 987; n++) {
  let nSet = new Set((n + "").split(""));
  let target = n + "";
  let correctCnt = 0;

  if (nSet.has("0") || nSet.size !== 3) continue;
  num.forEach((x) => {
    let [num, str, ball] = x.split(" ").map(Number);
    num = num + "";
    let strCnt = 0,
      ballCnt = 0;
    for (let i = 0; i < 3; i++) {
      if (target[i] === num[i]) strCnt++;
      else if (nSet.has(num[i])) ballCnt++;
    }
    if (!(strCnt === str && ballCnt === ball)) return false;
    else correctCnt++;
  });
  if (correctCnt === t) ans.add(n);
}
console.log(ans.size);

// 초기 경우의 수: 9^3=729
// 완전탐색으로 111부터 증가시키며 스트라이크+볼 검사
// 모든 조건이 입력과 일치하면 후보에 추가
