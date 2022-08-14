const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let [a, b, c] = fs.readFileSync(inputPath).toString().trim().split(" ").map(BigInt);
const mul = (x, exp, mod) => {
  if (exp === 1n) return x % mod;

  let result = mul(x, exp / 2n, mod);
  if (exp % 2n) return ((result % mod) ** 2n * (x % mod)) % mod;
  else return (result % mod) ** 2n % mod;
};

console.log(Number(mul(a, b, c)));

// 모듈러 법칙: (a*b)%c==(a%c*b%c)%c
// 3^121=3^120*3^1
// 3^120=3^60*3^60
// 3^60=3^30*3^30
// 3*30=3^15*3^15
// 3^15=3^7*3*8

// 5%3===2, 25%3===1
