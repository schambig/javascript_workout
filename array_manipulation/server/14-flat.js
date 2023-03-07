const matriz = [
    [1,2,3],
    [4,5,6, [1,2, [1,2]]],
    [7,8,9]
];

// 'custom' flat() method, a 'for' loop is nedeed for each level of the matriz
const newArray = [];
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray.push(element);
    }
}
console.log('for', newArray);

// built-in flat() method, indicate the depth of work as an argument of flat
const rta = matriz.flat(3);
console.log('flat', rta);

/*
The flat() method is a built-in method in JavaScript that allows you to flatten a nested array
by concatenating sub-arrays into a single array.

The flat() method returns a new array that is a flattened version of the original array.
By default, it flattens the array only one level deep.
However, you can pass an optional argument to specify the depth level to which the array should be flattened.

The syntax for using the flat() method is as follows:
    array.flat([depth])
*/