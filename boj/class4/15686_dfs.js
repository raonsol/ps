const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let [nums, ...cityMap] = fs.readFileSync(inputPath).toString().trim().split("\n");
const [n, m] = nums.split(" ").map(Number);
cityMap = cityMap.map((x) => x.split(" ").map(Number));

// 좌표 저장
const house = [],
  chicken = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (cityMap[i][j] === 1) house.push({ x: j, y: i });
    else if (cityMap[i][j] === 2) chicken.push({ x: j, y: i });
  }
}

// 거리 계산
const distList = []; // house:chicken dist list
house.forEach((h) => {
  let dists = [];
  chicken.forEach((c, idx) => {
    let dist = Math.abs(c.x - h.x) + Math.abs(c.y - h.y);
    dists.push({ idx: idx, dist: dist });
  });
  dists.sort((a, b) => a.dist - b.dist);
  distList.push(dists);
});

// M개의 치킨집 고르기
const combList = [],
  visited = new Array(chicken.length).fill(false);
const dfs = (idx, depth, visited) => {
  if (depth === m) {
    combList.push(visited);
    return;
  }
  for (let i = idx; i < chicken.length; i++) {
    if (!visited[i]) {
      visited[i] = true;
      dfs(i, depth + 1, [...visited]);
      visited[i] = false;
    }
  }
};
dfs(0, 0, visited);

// 거리 구하기
let minDist = Number.MAX_SAFE_INTEGER;
combList.forEach((avalChicken) => {
  let tmpDist = 0;
  for (let hIdx = 0; hIdx < distList.length; hIdx++) {
    for (let cIdx = 0; cIdx < distList[hIdx].length; cIdx++) {
      // distList[hIdx][cIdx]==={idx, dist}, 가까운 순서로 정렬됨
      if (avalChicken[distList[hIdx][cIdx].idx]) {
        tmpDist += distList[hIdx][cIdx].dist;
        break;
      }
    }
    if (tmpDist >= minDist) {
      break;
    }
  }
  minDist = Math.min(minDist, tmpDist);
});

console.log(minDist);

// 각 집에서 모든 치킨집까지의 거리를 저장해서 가까운 순으로 정렬
// m개를 제외한 나머지 치킨집을 고르고 거리의 합 구하기, 모든 경우의 수에 대해 수행(조합, boolean 배열로 생성)
// Backtracking: 만약 거리를 합하는 중에 최소거리보다 커지면 pruning
// 최소거리 출력

// 집과 치킨집의 좌표 목록은 각각 배열로 저장
// 거리 목록도 {index, distance} 형태로 배열로 저장 후 정렬
