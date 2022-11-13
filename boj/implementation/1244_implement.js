const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = require("fs").readFileSync(inputPath).toString().trim().split("\n");
const switchN = Number(input[0]),
  personN = Number(input[2]);
let switches = input[1].split(" ").map((x) => !!Number(x));

for (let i = 3; i < personN; i++) {
  let [g, s] = input[i].split(" ").map(Number);
  if (g === 1) {
    for (let j = s - 1; j < switchN; j += s) {
      switches[j] = !switches[j];
    }
  } else {
    let offset = 0,
      l,
      r;
    while (s - 1 - offset >= 0 && s - 1 + offset < switchN) {
      (l = switches[s - 1 - offset]), (r = switches[s - 1 + offset]);
      if (l === r) {
        switches[s - 1 - offset] = !l;
        switches[s - 1 + offset] = !r;
      } else break;
      offset++;
    }
  }
}

let ans = "";
for (let i = 1; i <= switchN; i++) {
  ans += switches[i - 1] ? "1 " : "0 ";
  if (!(i % 20)) {
    ans = ans.trim() + "\n";
  }
}

console.log(ans);