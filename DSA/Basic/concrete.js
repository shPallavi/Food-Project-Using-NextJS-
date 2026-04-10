// write. afunction that takes. a string and returns count of each character in the string

charCount("aaaa"); // {a : 4}
charCount("hello"); // {h : 1, e : 1, l : 2, o : 1}

function charCount(str) {
  // Create an object to store character counts
  var result = {};

  // Loop through each character in the string
  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();

    // If character already exists in result, increment count
    if (result[char] > 0) {
      result[char]++;
    }
    // Otherwise, initialize it with 1
    else {
      result[char] = 1;
    }
  }

  // Return the final result object
  return result;
}

console.log(charCount("Hi  There"));

// function charCounts(str) {
//   var obj = {};

//   for (var i = 0; i < str.length; i++) {
//     var char = str.toLowerCase();
//     if (/[a-z0-9]/.test(char)) {
//       if (obj[char] > 0) {
//         obj[char]++;
//       } else {
//         obj[char] = 1;
//       }
//     }
//   }
//   return obj;
// }

// console.log(charCounts("Pallavi"));

function charCounts(str) {
  // Create an empty object to store character counts
  var obj = {};

  // Loop through each character in the string

  for (var char of str) {
    // Check if the character is alphanumeric (a-z or 0-9)
    // This ignores spaces, commas, and special characters
    if (/[a-z0-9]/.test(char)) {
      // Convert character to lowercase (so 'H' and 'h' are treated the same)
      char = char.toLowerCase();
      // Increment the count if character exists, otherwise initialize to 1
      // ++obj[char] → increments value (if undefined, becomes NaN)
      // || 1 → if result is falsy (like NaN), set value to 1
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

console.log(charCounts("Hello , hi"));
