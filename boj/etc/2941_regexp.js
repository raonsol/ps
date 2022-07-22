const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = require("fs").readFileSync(inputPath).toString().trim();

// 조건분기 검색
// let ans = input.length;
// for (let i = 1; i < input.length; i++) {
//   if (input[i] === "=" && "csz".includes(input[i - 1])) {
//     if (i >= 2 && input.slice(i - 2, i + 1) === "dz=") {
//       ans -= 2;
//     } else ans -= 1;
//   } else if (input[i] === "-" && "cd".includes(input[i - 1])) {
//     ans -= 1;
//   } else if (input[i] === "j" && "ln".includes(input[i - 1])) {
//     ans -= 1;
//   }
// }
// console.log(ans);

// 정규표현식 사용
console.log(input.replace(/c=|c-|dz=|d-|lj|nj|s=|z=/g, `c`).length);
