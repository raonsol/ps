const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let [t, ...input] = require("fs").readFileSync(inputPath).toString().trim().split("\n");
input = input.map((x) => x.split(" ").map(Number));

let ans = "";
for (let i = 0; i < t; i++) {
  let target = input[i];
  let rSum = target[2] + target[5];
  let cLen = Math.sqrt((target[0] - target[3]) ** 2 + (target[1] - target[4]) ** 2);
  if (target[0] === target[3] && target[1] === target[4]) {
    if (target[2] === target[5]) ans += "-1";
    else ans += "0";
  } else {
    if (Math.abs(target[2] - target[5]) === cLen || rSum === cLen) ans += "1";
    else if (Math.abs(target[2] - target[5]) > cLen || rSum < cLen) ans += "0";
    else ans += "2";
  }
  ans += "\n";
}
console.log(ans.trim());

// 두 원의 교점의 개수
// 1. 외접
// 반지름의 합==중점끼리의 거리: 1개
// 반지름의 합<중점끼리의 거리: 2개
// 반지름의 합>중점까지의 거리: 0개
// 2. 내접
// 중점이 같고 반지름이 같으면 무한대
// 중점이 같고 반지름이 다르면 0
// 중점이 다르고 큰 거리에서 작은 거리를 뺸 값이 중점끼리의 거리와 같으면 1
