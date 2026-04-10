// function printAllNum(n) {
//   for (var i = 0; i < n; i++) {
//     for (var j = 0; j < n; j++) {
//       // o(n*2)

//       console.log(i, j);

//       //   for (var k = 0; k < n; k++) {
//       //     console.log(i, j, k);
//       //   }
//     }
//   }
// }

// printAllNum(2);

function logAtLeast5(n) {
  for (var i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

logAtLeast5(100);

function logAtMost(n) {
  for (var i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

logAtMost(8);
