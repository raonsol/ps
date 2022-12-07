const fs = require("fs");
const inputPath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(inputPath).toString().trim().split("\n");

const isValidTags = (tags) => {
  if (!tags) return true;

  let stack = [];
  const openTagExp = new RegExp(/<([0-9a-z]+)>/);
  const closeTagExp = new RegExp(/<\/([0-9a-z]+)>/);
  let isValid = true;
  for (let tag of tags) {
    if (tag.match(openTagExp)) {
      stack.push(openTagExp.exec(tag)[1]);
    } else if (tag.match(closeTagExp)) {
      if (stack[stack.length - 1] !== closeTagExp.exec(tag)[1]) {
        isValid = false;
        break;
      } else stack.pop();
    }
  }
  if (stack.length > 0) isValid = false;
  return isValid;
};

const charStart = String.fromCharCode(32),
  charEnd = String.fromCharCode(127);
const banCharExp = `[<>&]|[^${charStart}-${charEnd}]`;
const isValidChar = (str) => (str.match(banCharExp) ? false : true);

let ans = "";

for (let str of input) {
  let decoded = str.replace(/&lt;|&gt;|&amp;|&x([\da-fA-F]{2})+;|<[0-9a-z]+\/>/g, "");
  const tagExp = new RegExp(/<[0-9a-z]+>|<\/[0-9a-z]+>/g);
  const tags = str.match(tagExp);
  decoded = decoded.replace(tagExp, "");

  if (isValidChar(decoded) && isValidTags(tags)) ans += "valid";
  else ans += "invalid";
  ans += "\n";
}

console.log(ans.trim());
