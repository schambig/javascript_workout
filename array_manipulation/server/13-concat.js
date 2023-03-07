const elements = [1,1,2,2];
const othersElements = [3,3,4,4];

// 'custom' concat() method
const newArray = [...elements]; // ...elements = clone/copy the array/object without memory reference
for (let index = 0; index < othersElements.length; index++) {
    const element = othersElements[index];
    newArray.push(element);
}
console.log('for', newArray);

// built-in concat() method
const rta = elements.concat(othersElements);
console.log('concat', rta);

// using just spread operator (be careful with this, it only accepts arrays, because in the end it splits the array)
const rta2 = [...elements, ...othersElements];
console.log('...', rta2);

// using spread operator and 'random' word, notice that spread operator split 'random' letter by letter
const rta3 = [...elements, ...'random'];
console.log('rta3', rta3);

// remember that concat() method is a mutable method, meaning that the original array will be changed

// using push(), which is a immutable method, the original array in not changed, cos another array is created
elements.push(...othersElements);
console.log('elements', elements);

/*
In JavaScript, the concat() function is used to combine two or more arrays or strings
and return a new array or string that contains the concatenated elements.

The syntax for using concat() function is as follows:
    array1.concat(array2, array3, ..., arrayN)  or
    string1.concat(string2, string3, ..., stringN)

    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const arr3 = [7, 8, 9];
    const newArray = arr1.concat(arr2, arr3);
    console.log(newArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

    const str1 = "Hello";
    const str2 = "World";
    const str3 = "!";
    const newString = str1.concat(" ", str2, str3);
    console.log(newString); // Output: Hello World!
*/