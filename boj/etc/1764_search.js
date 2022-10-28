const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let [args, ...input] = fs.readFileSync(inputPath).toString().trim().split("\n");
const [n, m] = args.split(" ").map(Number);
const unseen = input.slice(0, n).sort();
const unheard = input.slice(n).sort();
const [arrA, arrB] = unseen.length < unheard.length ? [unseen, unheard] : [unheard, unseen];

let ans = [];
let searchIdx = 0;
for (let name of arrA) {
  while (searchIdx <= arrB.length) {
    if (name > arrB[searchIdx]) searchIdx++;
    else if (name === arrB[searchIdx]) {
      ans.push(name);
      break;
    } else break;
  }
}

let ansStr = ans.length + "\n";
for (let name of ans) ansStr += `${name}\n`;
console.log(ansStr.trim());

// 둘다 정렬 후 작은 배열 기준으로 탐색 시작
// 탐색할 때는 앞글자부터 ascii 비교
// 타겟값이 더 작으면 타겟 idx 증가, 증가 안할때까지 반복문
