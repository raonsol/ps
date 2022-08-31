const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let [t, ...args] = fs.readFileSync(inputPath).toString().trim().split("\n");
t = Number(t);

let ans = "";
for (let tt = 0; tt < t * 3; tt += 3) {
  const func = args[tt].split(""),
    n = Number(args[tt + 1]);
  let num = args[tt + 2]
    .split(/,|\[|\]/)
    .filter((n) => n)
    .map(Number);
  let isReverse = false,
    isError = false;
  let start = 0,
    end = n;
  func.forEach((f) => {
    if (f === "R") isReverse = !isReverse;
    else if (f === "D") {
      if (!isReverse) start++;
      else end--;
      if (start > end) {
        isError = true;
        return false;
      }
    }
  });
  if (isError) ans += "error\n";
  else {
    num = num.slice(start, end);
    if (isReverse) num = num.reverse();
    ans += `[${num.toString()}]\n`;
  }
}

console.log(ans.trim());

// 정규표현식과 filter를 조합하여 숫자만 받기
// R일땐 뒤집기, D일땐 버리기
// R일 때 곧이곧대로 뒤집으면 시간초과 가능성 있음
// start와 end index를 저장하는 변수를 두개 만들어
// 정방향일때 D가 들어오면 start++, 역방향일때 D가 들어오면 end--
// start>end이면 error
// 배열이 비었을 때 error가 아니라, '비었을 때 D가 들어왔을 경우'에 error인 것에 유의
