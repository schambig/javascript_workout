const totals = [1,2,3,4];

// this is a "custom reduce
let sum = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum = sum + element;
}
console.log(sum);

// build-in reduce
const rta = totals.reduce((sum, element) => sum + element, 0)
console.log('rta', rta);

/**
    The reduce() method is another built-in array method in JavaScript that allows you to reduce an array of values to a single value. 
    It works by iterating over the elements of an array and accumulating a single value based on the result of a callback function.

    The reduce() method takes two arguments:

        A callback function that is executed on each element of the array.
        An optional initial value for the accumulator.
    
    The callback function takes two arguments:

        An accumulator that accumulates the results of each iteration.
        The current element being processed in the array.
        The callback function should return the new value of the accumulator after each iteration.
 */