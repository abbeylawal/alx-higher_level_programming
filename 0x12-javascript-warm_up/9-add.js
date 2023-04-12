#!/usr/bin/node
function add(a, b) {
  const sum = a + b;
  console.log(sum);
}

const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[3]);

if (isNaN(num1) || isNaN(num2)) {
  console.log("Please provide two valid integers as command line arguments");
} else {
  add(num1, num2);
}
