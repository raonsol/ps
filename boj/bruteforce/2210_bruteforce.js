const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(inputPath).toString().trim().split("\n");
input = input.map((x) => x.split(" ").map(Number));
let numSet = new Set();
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

const searchNum = (y, x, cnt, str) => {
  str += input[y][x];
  if (cnt === 6) {
    numSet.add(str);
    return;
  } else {
    for (let i = 0; i < 4; i++) {
      let [newY, newX] = [y + dy[i], x + dx[i]];
      if (newY >= 0 && newY < 5 && newX >= 0 && newX < 5) {
        searchNum(newY, newX, cnt + 1, str);
      }
    }
  }
};

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    searchNum(j, i, 1, "");
  }
}

console.log(numSet.size);