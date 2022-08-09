const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let n = fs.readFileSync(inputPath).toString().trim();
n = Number(n);
let ans = 0;
let queenX = new Array(n);

const isAval = (y, x) => {
  for (let i = 0; i < y; i++){
    if (queenX[i] === x || Math.abs(queenX[i] - x) === y - i) {
      return false;
    }
  }
  return true;
}

const dfs = (depth) => {
  for (let x = 0; x < n; x++) {
    if (isAval(depth, x)) {
      if (depth === n - 1) ans++;
      else {
        queenX[depth] = x;
        dfs(depth + 1);
      }
    }
  }
};

dfs(0);
console.log(ans);