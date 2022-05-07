let answer = [];

const dfs = (nums, num, count, arr = []) => {
  if (num === count) answer.push([...arr]);
  else {
    for (let i = 0; i < nums.length; i++) {
      arr.push(nums[i]);
      dfs(nums.slice(i + 1), num + 1, count, arr);
      arr.pop();
    }
  }
};
dfs([1, 2, 3, 4], 0, 3);
console.log(answer); //[ [ 1, 2, 3 ], [ 1, 2, 4 ], [ 1, 3, 4 ], [ 2, 3, 4 ] ]