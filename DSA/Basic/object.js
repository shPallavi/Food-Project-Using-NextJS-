// Unodred key value pair is called objects

// When to use object

// When you don't need order
// when you need fast acces / insertion and removal

let instructor = {
  firstName: "Kelly",
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4],
};

console.log(Object.keys(instructor)); // [ 'firstName', 'isInstructor', 'favoriteNumbers' ]

console.log(Object.values(instructor)); // [ 'Kelly', true, [ 1, 2, 3, 4 ] ]

console.log(Object.entries(instructor));

// [
//   [ 'firstName', 'Kelly' ],
//   [ 'isInstructor', true ],
//   [ 'favoriteNumbers', [ 1, 2, 3, 4 ] ]
// ]

console.log(instructor.hasOwnProperty("firstName"));
