function sum(arr) {
  let total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function doubleArray(arr) {
  let newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2);
  }
  return newArr;
}

console.log(doubleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
