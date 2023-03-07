const letters = ['a','b','c'];

const newArray = letters.map(item => item + '++');
// const newArray = [];
// for (let index = 0; index < letters.length; index++) {
//     const element = letters[index];
//     newArray.push(element + '++');
// }
console.log('original', letters); // Output: original [ 'a', 'b', 'c' ]
console.log('new', newArray); // Output: new [ 'a++', 'b++', 'c++' ]

/*
The map() method is a built-in function in JavaScript that is used to create a new array
by applying a given function to each element of an existing array.
The function passed to the map() method takes three arguments:
    the current element being processed, its index, and the original array.

    const numbers = [1, 2, 3, 4, 5];
    const squareRoots = numbers.map(function(currentValue, index, array) {
      return Math.sqrt(currentValue);
    });
    console.log(squareRoots); // Output: [1, 1.4142135623730951, 1.7320508075688772, 2, 2.23606797749979]

    const numbers = [1, 2, 3, 4, 5];
    const squareRoots = numbers.map((currentValue, index, array) => {
      return Math.sqrt(currentValue);
    });
    console.log(squareRoots); // Output: [1, 1.4142135623730951, 1.7320508075688772, 2, 2.23606797749979]
*/