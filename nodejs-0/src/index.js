"use strict";

const fibonacciRecursive = (i) => {
  if (i <= 1) return i;

  return fibonacciRecursive(i - 1) + fibonacciRecursive(i - 2);
};

const fibonacci = () => {
  const sequence = [];

  for (let i = 0; i <= 14; i++) {
    let result = fibonacciRecursive(i);

    sequence.push(result);
  }

  return sequence;
};

const isFibonnaci = (num) => {
  const sequence = fibonacci();

  const is = sequence.find((number) => number == num);

  return typeof is == "undefined" ? false : true;
};

module.exports = {
  fibonacci,
  isFibonnaci,
};
