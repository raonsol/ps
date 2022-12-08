const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [args, ...input] = fs.readFileSync(inputPath).toString().trim().split("\n");
const [N, M, Q] = args.split(" ").map(Number);

let inputIdx = 0;

// hidden layer
const perceptron = new Array(M);
for (let i = 0; i < M; i++) {
  const [C, ...info] = input[inputIdx++].split(" ").map(Number);
  const pFrom = info.slice(0, C).map((x) => x - 1);
  const weight = info.slice(C, C * 2).map(BigInt);
  const pEdge = new Map();
  for (let i = 0; i < C; i++) {
    pEdge.set(pFrom[i], weight[i]);
  }
  const bias = BigInt(info[C * 2]);
  perceptron[i] = { bias: bias, output: 0, edge: pEdge };
}

// output layer
const outData = input[inputIdx++].split(" ").map(BigInt);
const outWeight = outData.slice(0, M).map(BigInt);
const outBias = outData[M];

// inputs
const getFinalResult = (input) => {
  perceptron.forEach((p) => {
    let pResult = 0n;
    p.edge.forEach((weight, pFrom) => {
      pResult += input[pFrom] * weight;
    });
    pResult += p.bias;
    p.output = pResult;
  });

  let result = 0n;
  outWeight.forEach((weight, idx) => {
    result += perceptron[idx].output * weight;
  });
  result += outBias;
  return result;
};

let ans = "";
for (let i = inputIdx; i < input.length; i++) {
  const inData = input[i].split(" ").map(BigInt);
  ans += `${getFinalResult(inData)}\n`;
}
console.log(ans.trim());
