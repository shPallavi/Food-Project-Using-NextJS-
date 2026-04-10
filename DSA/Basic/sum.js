// first method

function addNum(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) total += i;
  return total;
}

const result = addNum(5);
console.log(result);

// 1 + 2 + 3+ 4 + 5 + 6 + 7 + 8 + 9 + 10 =

// second method

function addNums(n) {
  return (n * (n + 1)) / 2;
}
console.log(addNums(5));
