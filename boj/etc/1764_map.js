const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let [args, ...input] = fs.readFileSync(inputPath).toString().trim().split("\n");
const [n, m] = args.split(" ").map(Number);
const unseen = new Set(input.slice(0, n));
const unheard = input.slice(n);
let ans = unheard.filter((x) => unseen.has(x)).sort();

let ansStr = ans.length + "\n";
for (let name of ans) ansStr += `${name}\n`;
console.log(ansStr.trim());
