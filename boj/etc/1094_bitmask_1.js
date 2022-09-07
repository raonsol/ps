console.log(
  (+require("fs").readFileSync("/dev/stdin").toString().trim())
    .toString(2)
    .split("")
    .filter((x) => x === "1").length
);