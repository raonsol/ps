const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [n, m] = fs.readFileSync(inputPath).toString().trim().split(" ").map(Number);
const target = [...Array(n).keys()].map((x) => x + 1); // [1, 2, 3, ... , n]
let ans = "",
  arr = [];
let visited = Array(n).fill(false);

const DFS = (depth) => {
  if (depth === m) {
    ans += arr.join(" ") + "\n";
    //아래 구문을 쓰면 시간은 두배로, 메모리는 세배를 더 먹는다
    // arr.forEach(y => ans += y + " ");
    // ans += '\n';
  } else {
    for (let i of target) {
      arr[depth] = i;
      DFS(depth + 1);
    }
  }
};
DFS(0);

console.log(ans);
