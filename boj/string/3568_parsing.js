const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let [typ, ...input] = fs.readFileSync(inputPath).toString().trim().replace(/[,;]/g, "").split(" ");
let ans = "";
input.forEach((str) => {
  const parsed = str.match(/^([a-zA-Z]+)([\[\]\*\&]*)$/);
  const [name, subType] = [
    parsed[1],
    parsed[2].split("").reverse().join("").replace(/\]\[/g, "[]"),
  ];
  ans += `${typ}${subType} ${name};\n`;
});
console.log(ans.trim());
