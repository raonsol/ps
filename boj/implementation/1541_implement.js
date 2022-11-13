const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(inputPath).toString().trim().split("");
input.push("+"); //마지막 숫자 연산을 위해 추가
let sum = 0;
let num = "",
  isMinus = false;
input.forEach((c) => {
  if (c === "+") {
    let n = parseInt(num);
    if (!isMinus) sum += n;
    else sum -= n;
    num = "";
  } else if (c === "-") {
    let n = parseInt(num);
    if (!isMinus) {
      isMinus = true;
      sum += n;
    } else {
      sum -= n;
    }
    num = "";
  } else num += c;
});

console.log(sum);

// 최대한 더해서 빼는게 이득 === 연속된 덧셈끼리는 괄호로 묶는게 이득
// 숫자를 queue에 넣고 부호가 나오는 순간 모두 pop, 합쳐서 숫자로 변환
// 뺄셈이 등장하기 전까지는 다 더하다가
// 뺄셈이 등장하면 모든 덧셈연산을 뺄셈으로 변환 (괄호로 묶으면 풀었을때 뺼셈이 됨)

// 5+3+4+2+7-(3+23+21+2+1)-4-(1+2)
