const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let [t, ...input] = fs.readFileSync(inputPath).toString().trim().split("\n");

let ans = "";
const isAvalNums = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    // const exp = new RegExp(`^${nums[i-1]}`); // 메모리, 시간 두배
    if (nums[i].length > nums[i - 1].length && nums[i].startsWith(nums[i - 1])) return false;
  }
  return true;
};

let inputIdx = 0;
while (t--) {
  const n = +input[inputIdx++];
  const nums = input.slice(inputIdx, (inputIdx += n)).sort();
  ans += isAvalNums(nums) ? "YES" : "NO";
  ans += "\n";
}

console.log(ans.trim());
