const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [n, ...input] = fs.readFileSync(inputPath).toString().trim().split("\n");

let ans = "SLURPYS OUTPUT\n";
const checkSlump = (str) => {
  if (str.match(/^([DE]F+)+G$/)) return true;
  else return false;
};

const checkSlimp = (str) => {
  if (str === "AH") {
    return true;
  } else if (str.match(/^AB[A-H]+C$/)) {
    return checkSlimp(str.replace(/^AB([A-H]+)C$/, "$1"));
  } else if (str.match(/^A[A-H]+C$/)) {
    return checkSlump(str.replace(/^A([A-H]+)C$/, "$1"));
  } else return false;
};
for (let str of input) {
  let isSlurphy = false;
  for (let i = 1; i < str.length - 2; i++) {
    if (checkSlimp(str.slice(0, i)) && checkSlump(str.slice(i))) {
      isSlurphy = true;
      break;
    }
  }
  ans += `${isSlurphy ? "YES" : "NO"}\n`;
}
ans += "END OF OUTPUT";
console.log(ans);
