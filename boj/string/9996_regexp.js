const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(inputPath).toString().trim().split("\n");
const n = +input[0];
const reg = new RegExp("^" + input[1].replace("*", "[a-z]*") + "$", "g");
input = input.slice(2);
let ans = "";

for (let str of input) {
  if (str.match(reg)) ans += "DA";
  else ans += "NE";
  ans += "\n";
}

console.log(ans.trim());
