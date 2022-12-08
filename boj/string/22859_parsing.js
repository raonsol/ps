const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(inputPath).toString().trim();
input = input
  .replace(/<\/?main>/g, "")
  .split(/\<div title="(.+?)"\>/g)
  .filter((i) => i);
let parsedHTML = [];
for (let i = 0; i < input.length; i += 2) {
  const par = input[i + 1]
    .split(/<p>/g)
    .map((line) =>
      line
        .replace(/<\/?.+?>/g, "")
        .replace(/ +/g, " ")
        .trim()
    )
    .slice(1);
  parsedHTML.push({ div: input[i], p: par });
}
let ans = "";
parsedHTML.forEach((obj) => {
  ans += `title : ${obj.div}\n`;
  obj.p.forEach((par) => (ans += `${par}\n`));
});

console.log(ans.slice(0, -1));

// .trim() 사용시 오답, 문장 내용이 없는 경우에도 빈 줄 출력 필요
