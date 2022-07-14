const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let [n, m] = require("fs").readFileSync(inputPath).toString().trim().split(" ").map(Number);
let result = "";

const dfs = (depth, m, n, base, str) => {
  if (depth == m) {
    result+=`${str}${base}\n`
  } else {
    for (let i = 0; base + i <= n; i++) {
      dfs(depth + 1, m, n, base + i, `${str}${base} `);
    }
  }
};

for (let i = 1; i <= n; i++) {
  dfs(1, m, n, i, "");
}
console.log(result);
