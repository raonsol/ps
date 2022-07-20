const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let [input, target] = require("fs").readFileSync(inputPath).toString().trim().split("\n");
let stack = new Array();
const endChar = target[target.length - 1];
for (let i = 0; i < input.length; i++) {
  stack.push(input[i]);
  if (input[i] === endChar) {
    let compStr = stack.slice(-target.length, stack.length).join("");
    if (compStr === target) for (let i = 0; i < target.length; i++) stack.pop();
  }
}
let ans = stack.length ? stack.join("") : "FRULA";
console.log(ans);
